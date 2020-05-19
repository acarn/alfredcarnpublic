package ca.alfredcarn.rest.mvc.services.books.bookResults;

import java.util.ArrayList;
import java.util.List;

import ca.alfredcarn.gen.ApplicationLogger;

import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.mybatis.MBResult;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.wrapPenguinApi.WrapPenguinApi;

public class BookResults extends ArrayList<Result>{
	
	private static final long serialVersionUID = 1L;

	public BookResults(String titleOrAuthor, String page) {
		try {
			List<MBResult> lmr = WrapPenguinApi.toResultPage(titleOrAuthor, pageToInt(page));
			for( MBResult mbr : lmr ) {
				add(new Result(mbr.TITLE, mbr.AUTHOR, mbr.SUBTITLE));
			}
		}
		catch( Exception e ) { ApplicationLogger.getInstance().logException("Error in BookResults()", e); }
	}
	
	private int pageToInt(String page) {
		int r = 0;
		try { r = Integer.parseInt(page); }
		catch( NumberFormatException nfe ) { ApplicationLogger.getInstance().logException("Error in pageToInt()", nfe); }
		return r;
	}
}
