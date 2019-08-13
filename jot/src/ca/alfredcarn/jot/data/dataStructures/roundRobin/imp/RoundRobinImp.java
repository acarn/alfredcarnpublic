package ca.alfredcarn.jot.data.dataStructures.roundRobin.imp;

import java.util.ArrayList;

import ca.alfredcarn.jot.data.dataStructures.roundRobin.RoundRobin;

public class RoundRobinImp<T> implements RoundRobin<T> {
	private ArrayList<T> a = new ArrayList<T>();
	private Integer i=0;
	
	public void add(T t) { a.add(t); }
	
	public boolean remove(T t) {
		boolean r = false;
		int f = find(t);
		if( -1!=f ) {
			a.remove(f);
			r = true;
		}
		return r;
	}
	
	public T get() { validate(); T r=(getImp()); i++; return r; }
	
	public int find(T t) {
		int r = -1;
		int s = a.size();
		for( int x=0; x<s; x++ ) {
			T ax = a.get(x);
			if( ax.equals(t) ) { r=x; break; }
		}
		return r;
	}
	
	public boolean has(T t) {
		return (-1!=find(t));
	}
	
	public void reset() { i=0; }
	public void clear() { a.clear(); }
	public int size() { return a.size(); }
	
	private void validate() { i=(i<a.size() ? i : 0); }
	private T getImp() { return (i<a.size() ? a.get(i) : null); }
}
