package ca.alfredcarn.jot.data.dataStructures.pool;

import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.data.dataStructures.roundRobin.RoundRobin;

// A helper for implementors of Pool<T>.
public abstract class AbstractPool<T> implements Pool<T>{
	
	private RoundRobin<Item> rr = Jot.createRoundRobin(false/* Need not be thread-safe as this class has synchronized methods. */);
	
	protected void finalize() throws Throwable { free(); }
	
	// Leave this method unsynchronized to avoid indefinite waiting on other threads.
	/*unsynchronized*/ protected void free() {
		int s = rr.size();
		for( int x=0; x<s; x++ ) {
			Item i = rr.get();
			try{ onFree(i.t); }
			catch( Exception e ) { /* Do nothing. */ }
		}
		rr.clear();
	}
	
	abstract public T create();
	abstract public boolean shouldRemove(T t);
	abstract public int getMaxSize();
	abstract public long getTimeoutMs();
	protected void onAcquire(T t) {}
	protected void onRelease(T t) {}
	protected void onRemove(T t) {}
	protected void onFree(T t) {}
	
	private class Item{
		public T t = null;
		public boolean acquired = false;
		public Item(T t) { this.t = t; }
	}
	
	@Override synchronized public int size() { return rr.size(); }
	
	@Override /* unsynchronized */ public T acquire() throws PoolException {
		T r = next();
		if( null==r ) { 
			r = add();
			if( null==r ) {
				r = poll();
			}
		}
		onAcquire(r);
		return r;
	}

	@Override synchronized public boolean release(T t) {
		boolean r = false;
		int s = rr.size();
		for( int x=0; x<s; x++ ) {
			Item ix = rr.get();
			if( ix.t.equals(t) ) {
				if( ix.acquired ) {
					ix.acquired = false;
					r = true;
					onRelease(t);
					cleanup(ix); 
				}
				break;
			}
		}
		return r;
	}

	/* unsynchronized */ private void cleanup(Item i) {
		if( shouldRemove(i.t) ) { 
			rr.remove(i);
			onRemove(i.t);
		}
	}
	
	synchronized private T next() {
		T r = null;
		int s = rr.size();
		for( int x=0; x<s; x++ ) {
			Item ix = rr.get();
			if( ! ix.acquired ) {
				ix.acquired = true;
				r = ix.t;
				break;
			}
		}
		return r;
	}
	
	synchronized private T add() throws PoolException {
		T r = null;
		int max = getMaxSize();
		if( rr.size() < max ) {
			T t = create();
			if( null!=t ) {
				Item i = new Item(t);
				i.acquired = true;
				rr.add(i);
				r = i.t;
			}
			else { throw new PoolException("Cannot create item to add."); }
		}
		return r;
	}
	
	// Waiting constants.
	static final private long fifteenMinutes = 1000 * 60 * 15; // The ultimate waiting threshold. Is this value reasonable?
	static final private long halfASecond = 500;
	static final private long limitToAvoidInfiniteLoop = Math.floorDiv(fifteenMinutes,  halfASecond) + 1;
	
	/* unsynchronized */ private T poll() throws PoolException {
		T r = null;
		long timeout = getTimeoutMs();
		long waited = 0;
		for(int x=0; x<limitToAvoidInfiniteLoop; x++) {
			long remaining = timeout - waited;
			long wait = java.lang.Math.min(halfASecond, remaining);
			if( 0<wait ) {
				try{ java.lang.Thread.sleep(wait); }
				catch( Exception e ) { throw new PoolException("Wait was Unsuccessful: " + e.getMessage()); }	
				waited = waited + wait;
				r = next();
				if( null!= r ) { break; }
			} else { break; }
		}
		if( null==r ) { throw new PoolException("Timeout reached while waiting for available item."); }
		return r;
	}
}
