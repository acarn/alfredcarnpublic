package ca.alfredcarn.rest.test.classes;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import ca.alfredcarn.jot.data.dataStructures.matrix.Row;
import ca.alfredcarn.jot.data.database.DatabaseException;
import ca.alfredcarn.jot.data.database.Transaction;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.ReadDatabase;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.hibernate.HBSearch;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.mybatis.MBResult;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.writeDatabase.WriteDatabase;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.writeDatabase.WriteDatabase.Operation;

public class TestReadDatabase {
	
	@Before
	public void before() {}
	
	@After
	public void after() {}
	
	@Test
	public void canReadDataBack() throws Exception {
		String titleOrAuthor = "Allan Holdsworth " + Long.toString(new Date().getTime());
		int page = 0;
		writeTheSearch(titleOrAuthor, page);
		int SEARCH_ID = readTheSearch(titleOrAuthor, page);
		writeTheResults(SEARCH_ID);
		readTheResults(titleOrAuthor, SEARCH_ID);
	}
	
	private void writeTheSearch(String titleOrAuthor, int page) {
		WriteDatabase wd = new WriteDatabase();
		assertNotNull(wd);
		Operation wo = wd.createOperation();
		Row s0 = wo.searches.matrix.nextRow();
		s0.setCell(wo.searches.TEXT, titleOrAuthor);
		s0.setCell(wo.searches.PAGE, page);
		try { wo.write(); }
		catch( DatabaseException e ) { fail(); }
		assertEquals( Transaction.Status.SUCCESS, wo.transaction.getStatus() );
		assertNull( wo.results.insert.out().getError() );
	}
	
	private int readTheSearch(String titleOrAuthor, int page) throws Exception {
		List<HBSearch> hbs = ReadDatabase.readSearches(titleOrAuthor, page);
		assertNotNull(hbs);
		assertEquals( 1, hbs.size() );
		HBSearch search = hbs.get(0);
		assertNotNull(search);
		int SEARCH_ID = search.getSEARCH_ID();
		assertNotNull(SEARCH_ID);
		assertTrue(0<=SEARCH_ID);
		return SEARCH_ID;
	}
	
	private void writeTheResults(int SEARCH_ID) {
		WriteDatabase wd = new WriteDatabase();
		Operation wo = wd.createOperation(); // A new operation.
		Row r0 = wo.results.matrix.nextRow();
		r0.setCell(wo.results.SEARCH_ID, SEARCH_ID);
		r0.setCell(wo.results.WORK_ID, 0);
		r0.setCell(wo.results.TITLE, "title0");
		r0.setCell(wo.results.SUBTITLE, "subtitle0");
		r0.setCell(wo.results.AUTHOR, "author0");
		Row r1 = wo.results.matrix.nextRow();
		r1.setCell(wo.results.SEARCH_ID, SEARCH_ID);
		r1.setCell(wo.results.WORK_ID, 1);
		r1.setCell(wo.results.TITLE, "title1");
		r1.setCell(wo.results.SUBTITLE, "subtitle1");
		r1.setCell(wo.results.AUTHOR, "author1");
		try { wo.write(); }
		catch( DatabaseException e ) { fail(); }
		assertEquals( Transaction.Status.SUCCESS, wo.transaction.getStatus() );
		assertNull( wo.results.insert.out().getError() );
	}
	
	private void readTheResults(String titleOrAuthor, int SEARCH_ID) throws Exception {
		List<MBResult> mbr = ReadDatabase.readResults(SEARCH_ID);
		assertNotNull(mbr);
		assertEquals(2, mbr.size());
		MBResult mbr0 = mbr.get(0);
		assertNotNull(mbr0);
		assertEquals( mbr0.SEARCH_ID, SEARCH_ID );
		assertEquals( mbr0.WORK_ID, 0 );
		assertEquals( mbr0.TITLE, "title0" );
		assertEquals( mbr0.SUBTITLE, "subtitle0" );
		assertEquals( mbr0.AUTHOR, "author0" );
		MBResult mbr1 = mbr.get(1);
		assertNotNull(mbr1);
		assertEquals( mbr1.SEARCH_ID, SEARCH_ID );
		assertEquals( mbr1.WORK_ID, 1 );
		assertEquals( mbr1.TITLE, "title1" );
		assertEquals( mbr1.SUBTITLE, "subtitle1" );
		assertEquals( mbr1.AUTHOR, "author1" );
	}
}
