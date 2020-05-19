package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.wrapPenguinApi;

import java.sql.SQLException;
import java.util.List;

import ca.alfredcarn.gen.ApplicationLogger;
import ca.alfredcarn.jot.data.dataStructures.matrix.Row;
import ca.alfredcarn.jot.data.database.DatabaseException;
import ca.alfredcarn.jot.data.database.insert.InsertError;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.ReadDatabase;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.hibernate.HBSearch;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.mybatis.MBResult;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readPenguinApiViaDocument.ReadPenguinApiViaDocument;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readPenguinApiViaDocument.ReadPenguinApiViaDocument.Tsa;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readPenguinApiViaJackson.ReadPenguinApiViaJackson;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readPenguinApiViaJackson.Work;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readPenguinApiViaJackson.Works;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.writeDatabase.WriteDatabase;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.writeDatabase.WriteDatabase.Operation;

public class WrapPenguinApi {
	
	private WrapPenguinApi() {}
	
	static public List<MBResult> toResultPage(String titleOrAuthor, int page) throws Exception {
		int SEARCH_ID = readSearchId(titleOrAuthor, page);
		if(-1==SEARCH_ID) {
			writeSearch(titleOrAuthor, page);
			SEARCH_ID = readSearchId(titleOrAuthor, page);
			//writeResultsFromDocument(titleOrAuthor, page, SEARCH_ID);
			writeResultsFromJackson(titleOrAuthor, page, SEARCH_ID);
		}
		return ReadDatabase.readResults(SEARCH_ID);
	}
	
	static private int readSearchId(String titleOrAuthor, int page) {
		List<HBSearch> s = ReadDatabase.readSearches(titleOrAuthor, page);
		return ( (0==s.size()) ? -1 : s.get(0).getSEARCH_ID() );
	}
	
	static private void writeSearch(String titleOrAuthor, int page) throws DatabaseException, SQLException {
		WriteDatabase wd = new WriteDatabase();
		Operation wo = wd.createOperation();
		Row s0 = wo.searches.matrix.nextRow();
		s0.setCell(wo.searches.TEXT, titleOrAuthor);
		s0.setCell(wo.searches.PAGE, page);
		wo.write();
		InsertError ie = wo.results.insert.out().getError();
		if( null!=ie ) { 
			SQLException se = ie.getException();
			if( null!= se ) {
				ApplicationLogger.getInstance().logException("Error in writeSearch()", se);
				throw se;
			}
		}
	}
	
	@SuppressWarnings("unused")
	static private void writeResultsFromDocument(String titleOrAuthor, int page, int SEARCH_ID) throws DatabaseException{
		WriteDatabase wd = new WriteDatabase();
		Operation wo = wd.createOperation();
		ReadPenguinApiViaDocument rpa = new ReadPenguinApiViaDocument();
		List<Tsa> l = rpa.toList(titleOrAuthor, page);
		for( Tsa tsa : l ) {
			Row row = wo.results.matrix.nextRow();
			row.setCell(wo.results.SEARCH_ID, SEARCH_ID);
			row.setCell(wo.results.WORK_ID, -1);
			row.setCell(wo.results.TITLE, tsa.TITLE);
			row.setCell(wo.results.SUBTITLE, tsa.SUBTITLE);
			row.setCell(wo.results.AUTHOR, tsa.AUTHOR);
		}
		wo.write();
	}
	
	static private void writeResultsFromJackson(String titleOrAuthor, int page, int SEARCH_ID) throws DatabaseException{
		WriteDatabase wd = new WriteDatabase();
		Operation wo = wd.createOperation();
		ReadPenguinApiViaJackson rpa = new ReadPenguinApiViaJackson();
		Works ws = rpa.read(titleOrAuthor, Integer.toString(page));
		for( Work w : ws.work ) {
			Row row = wo.results.matrix.nextRow();
			row.setCell(wo.results.SEARCH_ID, SEARCH_ID);
			row.setCell(wo.results.WORK_ID, -1);
			row.setCell(wo.results.TITLE, w.titleweb);
			row.setCell(wo.results.SUBTITLE, w.getSubtitle());
			row.setCell(wo.results.AUTHOR, w.authorweb);
		}
		wo.write();
	}
}
