package ca.alfredcarn.jot.test.classes;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.junit.Before;
import org.junit.Test;

import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.util.url.Url;

public class TestUrl {
	private Url u = null;

	@Before
	public void before() {
		u = Jot.createUrl();
		assertNotNull(u);
		u.setCredentials("testuser", "testpassword");
		assertTrue( u.setBase("https://reststop.randomhouse.com/resources/works") );
		assertTrue( u.addQueryStringParam("search", "music") );
		assertTrue( u.addQueryStringParam("start", "0") ); // The record to start at.
		assertTrue( u.addQueryStringParam("max", "15") ); // The page size.
	}
	
	@Test
	public void canConvertUrlToString() {
		assertEquals("https://reststop.randomhouse.com/resources/works?search=music&start=0&max=15", u.toString());
	}
	
	@Test
	public void canConvertToRawUrl() {
		assertNotNull(u.toRawUrl());
	}
	
	@Test
	public void canConvertToDocument() {
		try { assertNotNull(u.toDocument()); }
		catch(Exception e) { fail(); }
	}
}
