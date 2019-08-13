package ca.alfredcarn.jot.data.dataStructures.roundRobin;

public interface RoundRobin<T> {
	public void add(T t);
	public boolean remove(T t);
	public T get();
	public boolean has(T t);
	public void reset();
	public void clear();
	public int size();
}
