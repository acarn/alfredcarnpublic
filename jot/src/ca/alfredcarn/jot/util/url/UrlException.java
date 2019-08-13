package ca.alfredcarn.jot.util.url;

public class UrlException extends Exception{
	
	private static final long serialVersionUID = 1L;
	private final Url url;
	
	public UrlException(Url u, String reason) {
		super(reason);
		url = u;
	}
	
	public Url getUrl() { return url; }
}
