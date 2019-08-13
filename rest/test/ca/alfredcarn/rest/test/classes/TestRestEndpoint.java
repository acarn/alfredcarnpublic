package ca.alfredcarn.rest.test.classes;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.List;

import org.junit.Test;

import ca.alfredcarn.rest.mvc.services.books.bookResults.BookResults;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.mybatis.MBResult;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.wrapPenguinApi.WrapPenguinApi;

public class TestRestEndpoint {

	@Test
	public void canReadDocument() {
		/*
		Url u = Jot.createUrl();
		u.setBase("");
		Document d = null;
		try { d = u.toDocument(); }
		catch( UrlException ue ) { fail(); }
		assertNotNull(d);
		*/
	}
	
	@Test
	public void canRunBookResultsInternals() {
		try {
			List<MBResult> lmr = null;
			lmr = WrapPenguinApi.toResultPage("music", 0);
			assertTrue( 0< lmr.size() );	
		}
		catch( Exception e ) { 
			fail(); 
		}
	}
	
	@Test
	public void canReadBookResults() {
		BookResults br = new BookResults("music", "0");
		assertNotNull(br);
		assertTrue(0<br.size());
	}
}
