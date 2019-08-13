package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.mybatis;

import ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.mybatis.MBSearch;

public interface MBMapper {
	MBSearch selectSearches(int SEARCH_ID);
}
