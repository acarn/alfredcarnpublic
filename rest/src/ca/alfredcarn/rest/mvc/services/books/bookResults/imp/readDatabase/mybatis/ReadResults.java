package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.mybatis;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import ca.alfredcarn.jot.util.singleton.AbstractSingleton;
import ca.alfredcarn.gen.ApplicationLogger;
import ca.alfredcarn.gen.ApplicationProperties;

public class ReadResults extends AbstractSingleton{
	
	static private ReadResults instance = null;
	private InputStream inputStream = null;
	private SqlSessionFactoryBuilder builder = null; 
	private SqlSessionFactory factory = null;
	
	private ReadResults() throws IOException {
		inputStream = Resources.getResourceAsStream("mybatis.config.xml");
		builder = new SqlSessionFactoryBuilder();
		factory = builder.build(inputStream, ApplicationProperties.getInstance().getProperties());
		inputStream.close();
	}
	
	static public ReadResults getInstance() throws IOException { 
		if( null==instance ) { instance = new ReadResults(); }
		return instance;
	}
	@Override public void free() {}
	
	public List<MBResult> read(int SEARCH_ID){
		List<MBResult> r = null;
		SqlSession ss = null;
		try {
			ss = factory.openSession();
			MBSearch mbs = ss.getMapper(MBMapper.class).selectSearches(SEARCH_ID);
			if( null!=mbs ) { r = mbs.results; }	
		}
		catch(Exception e) { ApplicationLogger.getInstance().logException("Error in read()", e); throw e; }
		finally { if(null!=ss) { ss.close(); } }
		return r;
	}
}
