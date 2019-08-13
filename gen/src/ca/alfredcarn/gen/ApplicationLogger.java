package ca.alfredcarn.gen;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import ca.alfredcarn.jot.util.singleton.AbstractSingleton;

public class ApplicationLogger  extends AbstractSingleton {

	private static ApplicationLogger instance = null;
	private Logger raw = null;
	
	private ApplicationLogger() {}
	
	public static synchronized ApplicationLogger getInstance() {
		if( null==instance ) { 
			instance = new ApplicationLogger();
			org.apache.log4j.PropertyConfigurator.configure( 
				ApplicationProperties.getInstance().getProperties());
			instance.raw = LogManager.getLogger(ApplicationLogger.class);
		}
		return instance;
	}
	
	@Override
	public void free() {}
	
	public void logException(String message, Exception e) {
		try{ raw.error(message, e); }
		catch(Exception e2) { /*Do nothing.*/ }
	}
}
