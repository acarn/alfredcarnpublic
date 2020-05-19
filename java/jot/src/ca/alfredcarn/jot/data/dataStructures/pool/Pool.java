package ca.alfredcarn.jot.data.dataStructures.pool;

public interface Pool<T> {
	public int size();
	public T acquire() throws PoolException;	
	public boolean release(T t);
}
