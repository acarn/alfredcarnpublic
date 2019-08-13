package ca.alfredcarn.rest.test.classes;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;

import org.junit.Test;

public class TestTryCatchFinally {
	
	@Test
	public void verifyFinallyHappensBeforeRethrow() {
		ArrayList<String> a = new ArrayList<String>();
		try {
			try { 
				a.add("TRY"); 
				throw new Exception("THROW"); 
			}
			catch(Exception e) { 
				a.add("CATCH"); 
				throw new Exception("RETHROW"); 
			}
			finally { a.add("FINALLY"); }
		}
		catch(Exception e) {a.add("RETHROW"); }
		assertEquals("TRY", a.get(0));
		assertEquals("CATCH", a.get(1));
		assertEquals("FINALLY", a.get(2));
		assertEquals("RETHROW", a.get(3));
	}
}
