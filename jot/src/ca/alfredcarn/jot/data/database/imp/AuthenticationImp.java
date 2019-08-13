package ca.alfredcarn.jot.data.database.imp;

import ca.alfredcarn.jot.data.database.Authentication;

public class AuthenticationImp implements Authentication {
	private String cs = "";
	private String un = "";
	private String pw = "";
	
	@Override public String getConnectionString() { return cs; }
	@Override public void setConnectionString(String connectionString) { cs = connectionString; }
	@Override public String getUserName() { return un; }
	@Override public void setUserName(String userName) { un = userName; }
	@Override public String getPassword() { return pw; }
	@Override public void setPassword(String password) { pw = password; }
	@Override public boolean isValid() { return (""!=cs && ""!=un && ""!=pw ); }
}

