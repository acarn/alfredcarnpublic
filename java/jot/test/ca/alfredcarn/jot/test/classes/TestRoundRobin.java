package ca.alfredcarn.jot.test.classes;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.data.dataStructures.roundRobin.RoundRobin;

public class TestRoundRobin {
	
	private RoundRobin<Integer> rr = null;
	
	@Before
	public void before() {
		rr = Jot.createRoundRobin();
		assertNotNull(rr);
	}
	
	@After
	public void after() {}

	@Test
	public void initiallyHasNoItems() {
		assertEquals(0, rr.size());
	}
	
	@Test 
	public void canAddAnItem() {
		assertEquals(0, rr.size());
		rr.add(0);
		assertEquals(1, rr.size());
	}

	@Test
	public void canAccessItemsInSequence() {
		rr.add(0);
		rr.add(1);
		rr.add(2);
		assertEquals(3, rr.size());
		
		assertEquals((Integer)0, rr.get());
		assertEquals((Integer)1, rr.get());
		assertEquals((Integer)2, rr.get());
		assertEquals((Integer)0, rr.get());
		assertEquals((Integer)1, rr.get());
		assertEquals((Integer)2, rr.get());
	}
	
	@Test
	public void canRemoveAnItemAndMaintainTheSequence() {
		rr.add(0);
		rr.add(1);
		rr.add(2);
		assertEquals(3, rr.size());
		
		assertTrue(rr.remove(1));
		assertEquals(2, rr.size());
		
		assertEquals((Integer)0, rr.get());
		assertEquals((Integer)2, rr.get());
		assertEquals((Integer)0, rr.get());
		assertEquals((Integer)2, rr.get());
	}
	
	@Test
	public void cantRemoveOutOfBounds() {
		rr.add(0);
		rr.add(1);
		rr.add(2);

		assertEquals(3, rr.size());
		assertFalse(rr.remove(3));
		assertEquals(3, rr.size());
		assertFalse(rr.remove(-1));
		assertEquals(3, rr.size());
		assertEquals(3, rr.size());
		
		assertEquals((Integer)0, rr.get());
		assertEquals((Integer)1, rr.get());
		assertEquals((Integer)2, rr.get());
		assertEquals((Integer)0, rr.get());
		assertEquals((Integer)1, rr.get());
		assertEquals((Integer)2, rr.get());
	}
	
	@Test
	public void canResetToTheBeginning() {
		rr.add(0);
		rr.add(1);
		rr.add(2);
		assertEquals(3, rr.size());
		
		assertEquals((Integer)0, rr.get());
		assertEquals((Integer)1, rr.get());
		
		rr.reset();
		assertEquals(3, rr.size());
		
		assertEquals((Integer)0, rr.get());
		assertEquals((Integer)1, rr.get());
		assertEquals((Integer)2, rr.get());
	}
	
	@Test
	public void canClearItems() {
		rr.add(0);
		rr.add(1);
		rr.add(2);
		assertEquals(3, rr.size());
		
		assertEquals((Integer)0, rr.get());
		assertEquals((Integer)1, rr.get());
		assertEquals((Integer)2, rr.get());
		
		rr.clear();
		assertEquals(0, rr.size());
		
		assertNull(rr.get());
		assertNull(rr.get());
		assertNull(rr.get());
	}
}
