package ca.alfredcarn.gen;

import java.io.InputStream;
import java.util.Properties;
import ca.alfredcarn.jot.util.singleton.AbstractSingleton;

public class ApplicationProperties extends AbstractSingleton{

	public enum Build { DEVELOPMENT, STAGING, PRODUCTION }
	public final Build build = Build.PRODUCTION;
	
	static private ApplicationProperties instance = null;
	private Properties properties = null;
	
	static synchronized public ApplicationProperties getInstance() {
		if( null==instance ) { instance = new ApplicationProperties(); }
		return instance;
	}
	
	private ApplicationProperties() {
		InputStream is = getClass().getResourceAsStream(
			build == Build.PRODUCTION ? "/application.properties.production" : (
			build == Build.STAGING 	  ? "/application.properties.staging" 
									  : "/application.properties.development" ));
		properties = new Properties();
		try{ properties.load(is); }
		catch(Exception e) { /* Let it be null. */ }
	}
	
	@Override
	public void free() {}

	public Properties getProperties() { return properties; }
	
	public String getProperty(String key) { return properties.getProperty(key); }
}
