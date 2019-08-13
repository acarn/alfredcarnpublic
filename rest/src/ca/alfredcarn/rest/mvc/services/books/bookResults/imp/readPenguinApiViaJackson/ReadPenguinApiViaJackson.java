package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readPenguinApiViaJackson;

import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.util.url.Url;

public class ReadPenguinApiViaJackson {
	private static final String base = "https://reststop.randomhouse.com/resources";
	private static final String userName = "testuser";
	private static final String password = "testpassword";
	public static final int pageSize = 15;
	
	// Let's synchronize this to make sure there's no weirdness.
	synchronized public Works read(String titleOrAuthor, String page){
		Works r = new Works();
		XmlMapper xm = new XmlMapper();
		Url u = toUrl(titleOrAuthor, Integer.parseInt(page));
		try { r = xm.readValue(u.toRawUrl(), Works.class); }
		catch( Exception e ) { /* Do nothing. */ }
		return r;
	}
	
	private Url toUrl(String titleOrAuthor, int page) {
		Url r = Jot.createUrl();
		r.setCredentials(userName, password);
		r.setBase(base + "/works");
		r.addQueryStringParam("search", titleOrAuthor);
		r.addQueryStringParam("start", Integer.toString(page*pageSize));
		r.addQueryStringParam("max", Integer.toString(pageSize));
		return r;
	}
}
