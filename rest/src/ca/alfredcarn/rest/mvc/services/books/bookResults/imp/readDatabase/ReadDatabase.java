package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase;

import java.io.IOException;
import java.util.List;

import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.hibernate.HBSearch;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.hibernate.ReadSearches;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.mybatis.MBResult;
import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.mybatis.ReadResults;

public class ReadDatabase {
	private ReadDatabase() {}
	static public List<HBSearch> readSearches(String titleOrAuthor, int page) { return ReadSearches.getInstance().read(titleOrAuthor, page); }
	static public List<MBResult> readResults(int SEARCH_ID) throws IOException { return ReadResults.getInstance().read(SEARCH_ID); }
}
