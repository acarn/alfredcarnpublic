package ca.alfredcarn.jot.test.classes;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.junit.Before;
import org.junit.Test;

import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.data.database.Connection;
import ca.alfredcarn.jot.data.database.Database;
import ca.alfredcarn.jot.data.database.imp.connection.ConnectionPool;
import ca.alfredcarn.jot.data.database.imp.connection.ConnectionPools;

public class TestDatabaseConnectionPool {
	
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
	public void canAccessConnections() {
		ConnectionPool<Connection> p = getConnectionPool();
		hasNoConnectionsInitially(p);
		canAcquireAndReleaseTheFirstConnection(p);
		canAcquireTheSameConnectionAgain(p);
		canAcquireASecondConnectionIfTheFirstOneBusy(p);
		canAcquireOnceBusyConnectionIsReleased(p);
	}
	
	private ConnectionPool<Connection> getConnectionPool() {
		ConnectionPool<Connection> r = ConnectionPools.getInstance().getPool(db);
		assertNotNull(r);
		return r;
	}
	
	private void hasNoConnectionsInitially(ConnectionPool<Connection> p) {
		assertEquals(0, p.size());
	}
	
	private void canAcquireAndReleaseTheFirstConnection(ConnectionPool<Connection> p) {
		firstConnection(p);
	}
	
	private void canAcquireTheSameConnectionAgain(ConnectionPool<Connection> p) {
		firstConnection(p);
	}
	
	private void firstConnection(ConnectionPool<Connection> p) {
		Connection c = null;
		try{ 
			c = p.acquire();
			assertNotNull(c); 
			assertEquals(1, p.size());
			assertTrue(p.release(c));
			assertEquals(1, p.size());
		}
		catch( Exception de ) { fail(); }
		finally {
			p.release(c);
		}
	}
	
	private void canAcquireASecondConnectionIfTheFirstOneBusy(ConnectionPool<Connection> p) {
		Connection c0 = null;
		Connection c1 = null;
		try{ 
			c0 = p.acquire();
			assertNotNull(c0); 
			assertEquals(1, p.size());
			c1 = p.acquire();
			assertNotNull(c1);
			assertEquals(2, p.size());
			assertTrue(p.release(c0));
			assertTrue(p.release(c1));
			assertEquals(2, p.size());
		}
		catch( Exception de ) { fail(); }
		finally {
			p.release(c0);
			p.release(c1);
		}
	}
	
	private void canAcquireOnceBusyConnectionIsReleased(ConnectionPool<Connection> p) {
		Connection c0 = null;
		Connection c1 = null;
		Connection c2 = null;
		try{ // All connections are acquired.
			c0 = p.acquire();
			assertNotNull(c0); 
			c1 = p.acquire();
			assertNotNull(c1);
		}
		catch( Exception de ) { fail(); }
		
		try { // Next acquistion fails.
			c2 = p.acquire();
			fail("Expected exception was not caught.");
		}
		catch( Exception de ) { 
			// Expecting a timeout.
			assertNull(c2);
		}
		
		try { // Once a connection is released, next acquistion succeeds.
			assertTrue(p.release(c0));
			c2 = p.acquire();
			assertNotNull(c2);
			assertEquals(2, p.size());
		}
		catch( Exception de ) { fail(); }
		finally {
			p.release(c0);
			p.release(c1);
			p.release(c2);
		}	
	}
}
