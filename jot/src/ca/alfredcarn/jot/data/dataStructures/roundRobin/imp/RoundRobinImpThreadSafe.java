package ca.alfredcarn.jot.data.dataStructures.roundRobin.imp;

import ca.alfredcarn.jot.data.dataStructures.roundRobin.RoundRobin;

public class RoundRobinImpThreadSafe<T> implements RoundRobin<T> {
	private RoundRobinImp<T> rri = new RoundRobinImp<T>();
	@Override synchronized public void add(T t) { rri.add(t); }
	@Override synchronized public boolean remove(T t) { return rri.remove(t); }
	@Override synchronized public T get() { return rri.get(); }
	@Override public boolean has(T t) { return rri.has(t); }
	@Override synchronized public void reset() { rri.reset(); }
	@Override synchronized public void clear() { rri.clear(); }
	@Override synchronized public int size() { return rri.size(); }
}
