package ca.alfredcarn.jot.data.database;

public interface Authentication {
	public String getConnectionString();
	public void setConnectionString(String connectionString);
	public String getUserName();
	public void setUserName(String userName);
	public String getPassword();
	public void setPassword(String password);
	public boolean isValid();
}
