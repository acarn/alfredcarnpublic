package ca.alfredcarn.jot.test.classes;

import org.junit.Test;

import ca.alfredcarn.jot.Jot;

import static org.junit.Assert.assertNotNull;

public class TestJot {

	@Test
	public void canCreateAMatrix() {
		assertNotNull(Jot.createMatrix());
		assertNotNull(Jot.createMatrix(true));
		assertNotNull(Jot.createMatrix(false));
	}
	
	@Test
	public void canCreateARoundRobin() {
		assertNotNull(Jot.createRoundRobin());
		assertNotNull(Jot.createRoundRobin(true));
		assertNotNull(Jot.createRoundRobin(false));
	}
}
