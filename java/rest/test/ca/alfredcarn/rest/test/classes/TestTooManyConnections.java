package ca.alfredcarn.rest.test.classes;

import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.List;

import org.junit.Test;

import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.mybatis.MBResult;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.wrapPenguinApi.WrapPenguinApi;

public class TestTooManyConnections {

	@Test
	public void verifyIfConnectionFactoriesMustBeStatic() {
		List<MBResult> lmr = null;
		for( int x=0; x<1000; x++ ) {
			try { lmr = WrapPenguinApi.toResultPage("music", 0); }
			catch(Exception e) { fail("Connections may be leaking."); }
			finally { assertTrue(0<lmr.size()); }
		}
	}
}
