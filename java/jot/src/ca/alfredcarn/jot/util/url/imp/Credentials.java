package ca.alfredcarn.jot.util.url.imp;

import java.net.Authenticator;
import java.net.PasswordAuthentication;

class Credentials extends Authenticator{
	private final String userName;
	private final String password;

	public Credentials(String userName, String password) {
		this.userName = userName;
		this.password = password;
	}
	
	@Override public PasswordAuthentication getPasswordAuthentication() {
		return (new PasswordAuthentication(userName, password.toCharArray()));
	}
}
