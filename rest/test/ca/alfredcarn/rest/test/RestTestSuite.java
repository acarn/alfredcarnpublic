package ca.alfredcarn.rest.test;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import ca.alfredcarn.rest.test.classes.TestReadDatabase;
import ca.alfredcarn.rest.test.classes.TestRestEndpoint;
import ca.alfredcarn.rest.test.classes.TestTryCatchFinally;

@RunWith(Suite.class)
@SuiteClasses({
	TestTryCatchFinally.class,
	TestReadDatabase.class,
	TestRestEndpoint.class
})
public class RestTestSuite {}
