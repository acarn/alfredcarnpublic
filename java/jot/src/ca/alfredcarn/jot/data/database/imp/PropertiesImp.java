package ca.alfredcarn.jot.data.database.imp;

import ca.alfredcarn.jot.data.database.Properties;

public class PropertiesImp implements Properties{
	private String drv = "oracle.jdbc.driver.OracleDriver";
	private int poolSz = 20;
	private long waitMs = 1000 * 20;
	
	@Override public String getDriver() { return drv; }
	@Override public void setDriver(String driver) { drv = driver; }
	@Override public int getConnectionPoolSize() { return poolSz; }
	
	@Override public boolean setConnectionPoolSize(int size) { 
		boolean r = false;
		if( 0<=size /* A zero means grow indefinitely. */ ) { 
			poolSz = size;
			r = true;
		}
		return r;
	}
	
	@Override public long getAvailableConnectionWaitMs() { return waitMs; }
	@Override public boolean setAvailableConnectionWaitMs(long ms) {
		boolean r = false;
		if( 0<=ms ) {
			waitMs = ms;
			r = true;
		}
		return r;
	}
}
