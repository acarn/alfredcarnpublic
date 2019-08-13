package ca.alfredcarn.rest.mvc.services.books;

import ca.alfredcarn.rest.mvc.services.books.bookResults.BookResults;

public class BooksSearchXmlService {
	public static BookResults serve(String titleOrAuthor, String page) {
		return new BookResults(titleOrAuthor, page);
	}
}
