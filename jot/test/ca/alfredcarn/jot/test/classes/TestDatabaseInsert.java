package ca.alfredcarn.jot.test.classes;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Test;

import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.data.dataStructures.matrix.Column;
import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;
import ca.alfredcarn.jot.data.dataStructures.matrix.Row;
import ca.alfredcarn.jot.data.database.Database;
import ca.alfredcarn.jot.data.database.DatabaseException;
import ca.alfredcarn.jot.data.database.Transaction;
import ca.alfredcarn.jot.data.database.insert.Insert;

public class TestDatabaseInsert {

private Database db = null;
	
	@Before
	public void before() {
		db = Jot.createDatabase();
		assertNotNull(db);	
		
		db.getAuthentication().setConnectionString("");
		db.getAuthentication().setUserName("");
		db.getAuthentication().setPassword("");
		
		assertTrue( db.getProperties().setConnectionPoolSize(2) );
		assertTrue( db.getProperties().setAvailableConnectionWaitMs(3000) );
	}

	@Test
	public void canInsertRecords() {
		Matrix m = Jot.createMatrix();
		assertNotNull(m);
		
		Column<String> TEXT = m.nextColumn("TEXT", String.class);
		assertNotNull(TEXT);
		
		Row r0 = m.nextRow();
		assertNotNull(r0);
		assertTrue( r0.setCell(TEXT, "Test insert record 0.") );
		
		Row r1 = m.nextRow();
		assertNotNull(r1);
		assertTrue( r1.setCell(TEXT, "Test insert record 1.") );
		
		Insert i = db.createInsert();
		assertNotNull(i);
		assertTrue( i.in().setTable("BOOKS_SEARCHES") );
		assertTrue( i.in().setMatrix(m) );
		assertTrue( i.in().isValid() );
		
		Transaction t = db.createTransaction();
		assertNotNull(t);
		t.addStatement(i);
		
		try { db.execute(t); }
		catch( DatabaseException de ) { fail("Error with connection."); }
		assertEquals( Transaction.Status.SUCCESS, t.getStatus() );
		
		assertNull( i.out().getError() );
		assertTrue( i.out().getProcessed() );
		List<Boolean> ins = i.out().getInserted();
		assertNotNull(ins);
		assertEquals(2, ins.size());
		for( int x=0; x<ins.size(); x++ ) {
			boolean ix = ins.get(x);
			assertTrue(ix);
		}
	}
	
	@Test
	public void canBlockInsertingBadData() {
		Matrix m = Jot.createMatrix();
		assertNotNull(m);
		
		Column<Double> HEIGHT = m.nextColumn("HEIGHT", Double.class);
		assertNotNull(HEIGHT);
		
		Column<Float> WEIGHT = m.nextColumn("WEIGHT", Float.class);
		assertNotNull(WEIGHT);
		
		Column<Integer> AGE = m.nextColumn("AGE", Integer.class);
		assertNotNull(AGE);
		
		Column<Long> EMPLOYEE_ID = m.nextColumn("EMPLOYEE_ID", Long.class);
		assertNotNull(EMPLOYEE_ID);
		
		Column<Date> BIRTH_DATE = m.nextColumn("BIRTH_DATE", Date.class);
		assertNotNull(BIRTH_DATE);
		
		Column<Boolean> ACCESS = m.nextColumn("ACCESS", Boolean.class);
		assertNotNull(ACCESS);
		
		Row r0 = m.nextRow();
		assertNotNull(r0);
		assertTrue( r0.setCell(HEIGHT, 182.0) );
		assertTrue( r0.setCell(WEIGHT, (float)140.5) );
		assertTrue( r0.setCell(AGE, 45) );
		assertTrue( r0.setCell(EMPLOYEE_ID, (long)1234567890) );
		assertTrue( r0.setCell(BIRTH_DATE, new Date()) );
		assertTrue( r0.setCell(ACCESS, true) );
		
		Insert i = db.createInsert();
		assertNotNull(i);
		assertTrue( i.in().setTable("BOOKS_SEARCHES") );
		assertTrue( i.in().setMatrix(m) );
		assertTrue( i.in().isValid() );
		
		Transaction t = db.createTransaction();
		assertNotNull(t);
		t.addStatement(i);
		
		try { db.execute(t); }
		catch( DatabaseException de ) { fail("Error with connection."); }
		assertEquals( Transaction.Status.FAILURE, t.getStatus() );
		
		assertNotNull( i.out().getError() );
		assertTrue( i.out().getProcessed() );
		List<Boolean> ins = i.out().getInserted();
		assertNotNull(ins);
		assertEquals(0, ins.size());
	}
}
