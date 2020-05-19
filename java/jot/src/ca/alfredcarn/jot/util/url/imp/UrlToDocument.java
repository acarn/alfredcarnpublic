package ca.alfredcarn.jot.util.url.imp;

import java.io.InputStream;
import java.net.HttpURLConnection;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;

import ca.alfredcarn.jot.util.url.Url;
import ca.alfredcarn.jot.util.url.UrlException;

class UrlToDocument {
	
	static public Document convert(Url u) throws UrlException {
		Document r = null;
		try {
			UrlImp ui = (UrlImp)u;
			r = connectionToDocument((HttpURLConnection) ui.toRawUrl().openConnection());
		}
		catch( Exception e ) { throw new UrlException(u, e.getMessage()); }
		return r;
	}

	static private Document connectionToDocument(HttpURLConnection c) throws Exception {
		InputStream is = c.getInputStream();
		DocumentBuilderFactory f = DocumentBuilderFactory.newInstance();
		DocumentBuilder b = f.newDocumentBuilder();
		Document d = b.parse(is); 
		d.normalize(); 
		return d;
	}
}
