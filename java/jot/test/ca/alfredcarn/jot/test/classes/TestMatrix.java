package ca.alfredcarn.jot.test.classes;

import org.junit.*;

import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.data.dataStructures.matrix.Column;
import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;
import ca.alfredcarn.jot.data.dataStructures.matrix.Row;

import static org.junit.Assert.*;

import java.util.Date;

public class TestMatrix {
	private Matrix m1 = null;
	private Column<String> name = null;
	private Column<Integer> sin = null;
	private Column<Date> dob = null;
	
	private Matrix m2 = null;
	private Column<Long> empId = null;
	private Column<Integer> sinId = null;
	private Column<Float> progress = null;
	private Column<Double> fte = null;
	private Column<Boolean> contractor = null;
	
	@Before
	public void before() {
		m1 	  	   = Jot.createMatrix();		
		name  	   = m1.nextColumn("name", 15);
		sin   	   = m1.nextColumn("sin", Integer.class);
		dob   	   = m1.nextColumn("dob", Date.class);
		
		m2 	  	   = Jot.createMatrix();							
		empId 	   = m2.nextColumn("empId", Long.class);	
		sinId 	   = m2.nextColumn("sinId", Integer.class);		
		progress   = m2.nextColumn("progress", Float.class);					
		fte	  	   = m2.nextColumn("fte", Double.class);			
		contractor = m2.nextColumn("contractor", Boolean.class);
		
		assertNotNull(m1);
		assertNotNull(name);
		assertNotNull(sin);
		assertNotNull(dob);
		
		assertNotNull(m2);
		assertNotNull(empId);
		assertNotNull(sinId);
		assertNotNull(progress);
		assertNotNull(fte);
		assertNotNull(contractor);
	}
	
	@After
	public void after() {}
	
	// Columns.
	
	@Test
	public void cantAddAColumnWithAnUnsupportedDataType() {
		assertNull(m1.nextColumn("shouldBeNull", StringBuilder.class));
	}
	
	@Test
	public void cantAddADuplicateColumn() {
		assertNull(m1.nextColumn("name", 15));
	}
	
	@Test
	public void cantAddAColumnWithNoName(){
		assertNull(m1.nextColumn("", String.class));
	}
	
	@Test
	public void thereAreThreeColumnsInTheFirstMatrix() {
		assertEquals(3, m1.getColumnsSize());
	}
	
	@Test
	public void canAccessColumnsByIndex() {
		assertEquals(name, m1.getColumn(0, String.class));
		assertEquals(sin, m1.getColumn(1, Integer.class));
		assertEquals(dob, m1.getColumn(2, Date.class));
	}
	
	@Test
	public void canAccessColumnsByName() {
		assertEquals(name, m1.getColumn("name", String.class));
		assertEquals(sin, m1.getColumn("sin", Integer.class));
		assertEquals(dob, m1.getColumn("dob", Date.class));
	}
	
	@Test
	public void cantAccessAColumnWithTheWrongIndex(){
		assertNull(m1.getColumn(-1, String.class));
		assertNull(m1.getColumn(3, String.class));
	}
	
	@Test
	public void cantAccessAColumnWithTheWrongName(){
		assertNull(m1.getColumn("wrongName", String.class));
	}
	
	@Test
	public void canReadTheColumnDataTypeDirectly() {
		assertEquals("java.lang.String", m1.getColumnClassName(0));
		assertEquals("java.lang.Integer", m1.getColumnClassName(1));
		assertEquals("java.util.Date", m1.getColumnClassName(2));
		assertEquals("", m1.getColumnClassName(3));
		assertEquals(Date.class, m1.getColumn(2, Date.class).getColumnClass());
	}
	
	@Test
	public void canReadTheColumnNameDirectly(){
		assertEquals("name", m1.getColumnName(0));
		assertEquals("sin", m1.getColumnName(1));
		assertEquals("dob", m1.getColumnName(2));
	}
	
	@Test
	public void cantAccessAColumnWithNoName() {
		assertNull(m1.getColumn("", String.class));
	}
	
	@Test
	public void canDetermineIfAColumnBelongsToTheMatrix() {
		assertTrue(m1.hasColumn(sin));
		assertFalse(m1.hasColumn(sinId));
	}
	
	// Rows.
	
	@Test
	public void thereAreNoRowsInitially() {
		assertEquals(0, m1.getRowsSize());
	}
	
	@Test
	public void canCreateARowAndAccessIt() {
		Row lhs = m1.nextRow();
		assertNotNull(lhs);
		assertEquals(1, m1.getRowsSize());
		Row rhs = m1.getRow(0);
		assertNotNull(rhs);
		assertTrue(lhs.equals(rhs));
	}
	
	@Test
	public void cantAccessBeyondTheRowSize() {
		assertNull(m1.getRow(0));
		assertNotNull(m1.nextRow());
		assertNull(m1.getRow(1));
	}
	
	@Test 
	public void canReadAndWriteCellsOfAllSupportedDataTypes() {
		Row r1 = m1.nextRow();
		Row r2 = m2.nextRow();
		
		assertNotNull(r1);
		assertNotNull(r2);
		
		assertTrue(r2.setCell(progress, (float)0.4));
		assertEquals(Float.class, r2.getCell(progress).getClass());
		
		assertTrue(r2.setCell(fte, (double)0.5));
		assertEquals(Double.class, r2.getCell(fte).getClass());
		
		assertTrue(r2.setCell(sinId, (int)100));
		assertEquals(Integer.class, r2.getCell(sinId).getClass());
		
		assertTrue(r2.setCell(empId, (long)100));
		assertEquals(Long.class, r2.getCell(empId).getClass());
		
		assertTrue(r2.setCell(contractor, (boolean)false));
		assertEquals(Boolean.class, r2.getCell(contractor).getClass());
		
		assertTrue(r1.setCell(name, (String)"bob"));
		assertEquals(String.class, r1.getCell(name).getClass());
	}
	
	@Test
	public void canWriteToACellAndReadItBack() {
		readAndWriteTheNameToACell("alfred", "alfred");
	}
	
	@Test
	public void canReadAndWriteNullToACell() {
		readAndWriteTheNameToACell(null, null);
	}
	
	@Test
	public void canReadAndWriteAStringWithinItsMaxLength() {
		String fifteenChars = "123456789012345";
		readAndWriteTheNameToACell(fifteenChars, fifteenChars);
	}
	
	@Test
	public void cantReadAndWriteAStringBeyondItsMaxLength() {
		String fifteenChars = "123456789012345";
		String sixteenChars = "1234567890123456";
		readAndWriteTheNameToACell(sixteenChars, fifteenChars);
	}
	
	// Implement reading and writing to a cell.
	private void readAndWriteTheNameToACell(String toWrite, String toRead) {
		Row r = m1.nextRow();
		assertNotNull(r);
		assertTrue(r.setCell(name, toWrite));
		assertNotNull(m1.getRow(0));
		assertEquals(toRead, m1.getRow(0).getCell(name));
	}
	
	@Test
	public void cantReadAndWriteWithAColumnThatDoesntBelong() {
		Row r = m1.nextRow();
		assertNotNull(r);
		assertFalse(r.setCell(sinId, 123));
		try{ r.getCell(sinId); fail(); } 
		catch(Exception e) { /* Do nothing. */ }
	}
	
	@Test
	public void cantReadAndWriteWithANullColumn() {
		Row r = m1.nextRow();
		assertNotNull(r);
		assertFalse(r.setCell(null, "This should fail."));
		try{ r.getCell(null); fail(); } 
		catch(Exception e) { /* Do nothing. */ }
	}
}
