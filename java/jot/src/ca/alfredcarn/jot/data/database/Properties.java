package ca.alfredcarn.jot.data.database;

public interface Properties {
	public String getDriver();
	public void setDriver(String driver);
	public int getConnectionPoolSize();
	public boolean setConnectionPoolSize(int size);
	public long getAvailableConnectionWaitMs();
	public boolean setAvailableConnectionWaitMs(long milliseconds);
}
