package ca.alfredcarn.web.mvc.services.books.readRestApi;

import com.fasterxml.jackson.dataformat.xml.XmlMapper;

import ca.alfredcarn.gen.ApplicationProperties;
import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.util.url.Url;

public class ReadRestApi {

	public static BookResults read(String titleOrAuthor, String page) {
		BookResults r = new BookResults();
		XmlMapper xm = new XmlMapper();
		Url u = toUrl(titleOrAuthor, page);
		try { r = xm.readValue(u.toRawUrl(), BookResults.class); }
		catch( Exception e ) { /* Do nothing. */ }
		return r;
	}
	
	private static Url toUrl(String titleOrAuthor, String page) {
		Url r = Jot.createUrl();
		r.setBase(ApplicationProperties.getInstance().getProperty("book.baseUrl"));
		r.addPath(titleOrAuthor);
		r.addPath(page);
		return r;
	}
}
