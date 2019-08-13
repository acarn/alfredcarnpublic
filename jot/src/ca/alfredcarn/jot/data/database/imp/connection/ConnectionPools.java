package ca.alfredcarn.jot.data.database.imp.connection;

import java.util.HashMap;
import java.util.Set;

import ca.alfredcarn.jot.data.database.Connection;
import ca.alfredcarn.jot.data.database.Database;
import ca.alfredcarn.jot.util.singleton.AbstractSingleton;

public class ConnectionPools extends AbstractSingleton {
	
	static public HashMap<String, ConnectionPool<Connection>> pools = new HashMap<String, ConnectionPool<Connection>>();
	
	static private ConnectionPools instance = new ConnectionPools();
	private ConnectionPools() {};
	static public ConnectionPools getInstance() { return instance; }
	
	synchronized public ConnectionPool<Connection> getPool(Database db) {
		ConnectionPool<Connection> r = null;
		if( db.getAuthentication().isValid() ) {
			String cs = db.getAuthentication().getConnectionString();
			r = pools.get(cs);
			if( null==r ) {
				pools.put(cs, new ConnectionPool<Connection>(db));
				r = pools.get(cs);
			}
		}
		return r;
	}
	
	@Override synchronized public void free() {
		Set<String> ks = pools.keySet();
		for( String cs : ks ) {
			ConnectionPool<Connection> cp = pools.get(cs);
			cp.free();
		}
	}
}
