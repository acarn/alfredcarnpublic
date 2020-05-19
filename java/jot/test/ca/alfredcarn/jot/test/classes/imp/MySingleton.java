package ca.alfredcarn.jot.test.classes.imp;

import ca.alfredcarn.jot.util.singleton.AbstractSingleton;

// For use in TestSingleton.
public class MySingleton extends AbstractSingleton{		
	static private MySingleton instance = new MySingleton();
	private MySingleton() {}
	static public MySingleton getInstance() { return instance; }
	
	private boolean freed = false;
	@Override public void free() { freed = true; }
	public boolean isFreed() { return freed; }
	public void triggerFinalizer() throws Throwable { finalize(); }
}
