package ca.alfredcarn.jot.util.url.imp;

import java.net.Authenticator;
import java.util.ArrayList;
import java.util.HashMap;

import org.w3c.dom.Document;

import ca.alfredcarn.jot.util.url.Url;
import ca.alfredcarn.jot.util.url.UrlException;

public class UrlImp implements Url {
	
	private String userName = "";
	private String password = "";
	private String base = "";
	private final HashMap<String, String> params = new HashMap<String, String>();
	private final ArrayList<String> keys = new ArrayList<String>();

	@Override public void setCredentials(String userName, String password) { 
		this.userName = userName; 
		this.password = password; 
		authenticateCredentials();
	}
	
	public boolean authenticateCredentials() {
		boolean r = false;
		if( ! userName.isEmpty() && ! password.isEmpty() ) {
			Credentials c = new Credentials(userName, password);
			try { Authenticator.setDefault(c); r=true; }
			catch( Exception e ) { System.out.print(e.getMessage()); }
		}
		return r;
	}
	
	@Override public boolean setBase(String base) { 
		boolean r = ! base.isEmpty();
		if( r ) { this.base=base; }
		return r;
	}
	
	@Override public boolean addPath(String segment) {
		boolean r = (!base.isEmpty()) && (!segment.isEmpty());
		if( r ) {
			boolean hasSlash = ('/' == base.charAt(base.length()-1));
			base += (hasSlash?"":"/") + urlEncode(segment);
				
		}
		return r;
	}

	@Override public boolean addQueryStringParam(String key, String value) {
		boolean r = false;
		if( ! params.containsKey(key) ) {
			key = urlEncode(key);
			value = urlEncode(value);
			params.put(key, value);
			keys.add(key);
			r = true;
		}
		return r;
	}
	
	private String urlEncode(String s) {
		String r = s;
		try { r = java.net.URLEncoder.encode(s, "UTF-8").replace("+", "%20"); }
		catch(Exception e) { System.out.print(e.getMessage()); }
		return r;
	}
	
	@Override public String toString() {
		StringBuilder r = new StringBuilder();
		r.append(base);
		boolean f = true; // Is first param?
		for(String key : keys) {
			String val = params.get(key);
			r.append(f ? "?" : "&");
			f = false;
			r.append(key);
			r.append("=");
			r.append(val);
		}
		return r.toString();
	}
	
	@Override public java.net.URL toRawUrl() {
		 java.net.URL r = null;
		 try { r = new java.net.URL(toString()); }
		 catch(Exception e) { System.out.print(e.getMessage()); }
		 return r;
	}
	
	@Override public Document toDocument() throws UrlException {
		return UrlToDocument.convert(this);
	}
}
