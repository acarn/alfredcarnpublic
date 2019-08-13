package ca.alfredcarn.jot.util.singleton;

import ca.alfredcarn.jot.util.singleton.imp.SingletonRegistry;

/* A singleton object dies when the virtual machine shuts down. 

   You can use it like this:
   
	public class MySingleton extends Singleton{
		static private MySingleton i = new MySingleton();
		private MySingleton(){}
		static public MySingleton getInstance(){ return i; }
		public void shutdown() {} // To implement.
	}
*/

public abstract class AbstractSingleton {
	
	// Each singleton is added to a registry.
	public AbstractSingleton() { SingletonRegistry.getInstance().add(this); }
	
	// This implementation should follow the same documented guidelines for java.lang.Runtime.addShutdownHook().
	abstract public void free();
	
	// If garbage collection happens first, the singleton should free itself.
	protected void finalize() throws Throwable { free(); }
}
