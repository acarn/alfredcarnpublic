package ca.alfredcarn.jot.data.database.imp.connection;

import ca.alfredcarn.jot.data.dataStructures.pool.AbstractPool;
import ca.alfredcarn.jot.data.database.Authentication;
import ca.alfredcarn.jot.data.database.Database;

public class ConnectionPool<Connection> extends AbstractPool<Connection> {
	
	final private Database db;
	public ConnectionPool(Database db) { this.db = db; }
	@Override public void free() { super.free(); }
	@Override public Connection create() { return createImp(); }
	@Override public boolean shouldRemove(Connection t) { return (null!=((ConnectionImp)t).getException()); }
	@Override public int getMaxSize() { return db.getProperties().getConnectionPoolSize(); }
	@Override public long getTimeoutMs() { return db.getProperties().getAvailableConnectionWaitMs(); }
	@Override protected void onRemove(Connection t) { onFree(t); }
	@Override protected void onFree(Connection t) { ((ConnectionImp)t).close(); }
	
	@SuppressWarnings("unchecked")
	private Connection createImp() {
		Connection r = null;
		if( loadDriver() ){ /*Recommit after revert in Test Branch*/
			try {
				java.sql.Connection raw = createSqlConnection();
				if( null!=raw ) { r = (Connection)new ConnectionImp(raw); }
			}
			catch( Exception e ) { 
				 e.getMessage();
			}
		}
		return r;
	}
	
	private boolean loadDriver() {
		boolean r = false;
		try {
			Class.forName(db.getProperties().getDriver());
			r = true;
		} catch(Exception e) { /*Do nothing.*/ }
		return r;
	}

	private java.sql.Connection createSqlConnection() throws Exception {
		Authentication a = db.getAuthentication();
		return java.sql.DriverManager.getConnection(
			a.getConnectionString(), a.getUserName(), a.getPassword());
	}
}
