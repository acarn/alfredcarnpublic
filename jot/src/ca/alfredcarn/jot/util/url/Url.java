package ca.alfredcarn.jot.util.url;

import org.w3c.dom.Document;

public interface Url {
	public void setCredentials(String userName, String password);
	public boolean setBase(String base);
	public boolean addPath(String segment);
	public boolean addQueryStringParam(String key, String value);
	public String toString();
	public java.net.URL toRawUrl();
	public Document toDocument() throws UrlException;
}
