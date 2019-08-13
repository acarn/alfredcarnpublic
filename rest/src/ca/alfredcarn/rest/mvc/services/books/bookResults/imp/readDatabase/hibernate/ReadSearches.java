package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.hibernate;

import java.util.ArrayList;
import java.util.List;

import ca.alfredcarn.gen.ApplicationLogger;
import ca.alfredcarn.jot.util.singleton.AbstractSingleton;

public class ReadSearches extends AbstractSingleton {

	static private ReadSearches instance = new ReadSearches();
	private ReadSearches() {}
	static public ReadSearches getInstance() { return instance; }
	@Override public void free() {}
	
	private HibernateConfig cfg = new HibernateConfig();
	
	public List<HBSearch> read(String titleOrAuthor, int page) {
		List<HBSearch> r = new ArrayList<HBSearch>();
		org.hibernate.Session s = null;
		try {
			s = cfg.createSession();
			String sql = "SELECT s FROM HBSearch s WHERE s.TEXT = '" + titleOrAuthor.replaceAll("'", "''") + "' and s.PAGE = " + Integer.toString(page) ;
			r = s.createQuery(sql, HBSearch.class).getResultList();
		}
		catch( Exception e ) { ApplicationLogger.getInstance().logException("Error in read()", e); throw e; }
		finally { if( null!=s ) { s.close(); } }
		return r;
	}	
}
