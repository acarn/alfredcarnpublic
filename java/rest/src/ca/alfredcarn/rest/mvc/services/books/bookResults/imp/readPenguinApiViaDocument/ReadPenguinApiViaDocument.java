package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readPenguinApiViaDocument;

import java.util.ArrayList;
import java.util.List;

import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;

import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.util.url.Url;
import ca.alfredcarn.jot.util.url.UrlException;

public class ReadPenguinApiViaDocument {
	private static final String base = "https://reststop.randomhouse.com/resources";
	private static final String userName = "testuser";
	private static final String password = "testpassword";
	public static final int pageSize = 15;

	public class Tsa{
		public String TITLE = "";
		public String SUBTITLE = "";
		public String AUTHOR = "";
	}
	
	// Let's synchronize this to make sure there's no weirdness.
	synchronized public List<Tsa> toList(String titleOrAuthor, int page){
		Document d = getDocument(titleOrAuthor, page);
		return ( (null==d) ? new ArrayList<Tsa>() : documentToTsaArray(d) );
	}
	
	private Document getDocument(String titleOrAuthor, int page) {
		Url u = toUrl(titleOrAuthor, page);
		Document r = null;
		try { r = u.toDocument(); }
		catch( UrlException ue ) { /* Do nothing. */ }
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
	
	private ArrayList<Tsa> documentToTsaArray(Document d){
		ArrayList<Tsa> r = new ArrayList<Tsa>();
		Node works = d.getElementsByTagName("works").item(0);
		if( works!=null ) {
			NodeList cn = works.getChildNodes();
			int l = cn.getLength();
			for( int x=0; x<l; x++ ) {
				r.add(workToTsa(cn.item(x)));
			}
		}
		return r;
	}
	
	private Tsa workToTsa(Node work) {
		Tsa r = new Tsa();
		NodeList wcn = work.getChildNodes();
		int l = wcn.getLength();
		for(int y=0; y<l; y++) {
			Node cy = wcn.item(y);
			if( "titleweb" == cy.getNodeName() ) {
				r.TITLE = cy.getTextContent();
			}
			else if( "titleSubtitleAuth" == cy.getNodeName() ) {
				String[] spl = cy.getTextContent().split(":");
				r.SUBTITLE = (2<=spl.length) ? spl[1].trim() : "" ;
			}
			else if( "authorweb" == cy.getNodeName() ) {
				r.AUTHOR = cy.getTextContent();
			}
		}
		return r;
	}
}
