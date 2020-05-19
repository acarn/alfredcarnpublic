package ca.alfredcarn.jot.test;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import ca.alfredcarn.jot.test.classes.TestDatabaseConnectionPool;
import ca.alfredcarn.jot.test.classes.TestDatabaseInsert;
import ca.alfredcarn.jot.test.classes.TestJot;
import ca.alfredcarn.jot.test.classes.TestMatrix;
import ca.alfredcarn.jot.test.classes.TestRoundRobin;
import ca.alfredcarn.jot.test.classes.TestSingleton;
import ca.alfredcarn.jot.test.classes.TestUrl;

@RunWith(Suite.class)
@SuiteClasses({
	TestJot.class,
	TestSingleton.class,
	TestMatrix.class, 
	TestRoundRobin.class,
	TestDatabaseConnectionPool.class,
	TestDatabaseInsert.class,
	TestUrl.class
	})
public class JotTestSuite {}
