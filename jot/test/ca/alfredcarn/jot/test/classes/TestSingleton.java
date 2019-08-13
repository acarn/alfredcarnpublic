package ca.alfredcarn.jot.test.classes;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.junit.Test;

import ca.alfredcarn.jot.test.classes.imp.MySingleton;

public class TestSingleton {
	
	@Test
	public void canDestructWhenFinalized() {
		MySingleton i = MySingleton.getInstance();
		assertFalse(i.isFreed());
		try { i.triggerFinalizer(); }
		catch (Throwable e) { fail(); }
		assertTrue(i.isFreed());
	}
}
