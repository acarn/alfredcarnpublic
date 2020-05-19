package ca.alfredcarn.jot.util.singleton.imp;

import java.util.ArrayList;
import java.util.HashMap;

import ca.alfredcarn.jot.util.singleton.AbstractSingleton;

public class SingletonRegistry extends Thread {

	private ArrayList<AbstractSingleton> al = new ArrayList<AbstractSingleton>();
	private HashMap<AbstractSingleton, Integer> hm = new HashMap<AbstractSingleton, Integer>();
	
	static private SingletonRegistry i = new SingletonRegistry();
	static { Runtime.getRuntime().addShutdownHook(i); }
	private SingletonRegistry() {}
	
	synchronized static public SingletonRegistry getInstance() {
		return i;
	}
	
	synchronized public boolean add(AbstractSingleton o) {
		boolean r = false;
		if( ! hm.containsKey(o) ) {
			r = al.add(o);
			if( r ) { hm.put(o, al.size() - 1); }
		}
		return r;
	}
	
	@Override public void run() {
		for( AbstractSingleton o : al ) {
			try { o.free(); }
			catch( Exception e ) { /* Do nothing. */ }
		}
	}
}
