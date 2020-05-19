package ca.alfredcarn.web.mvc.services.books;

import java.util.Date;

import org.springframework.ui.ModelMap;

import ca.alfredcarn.gen.ApplicationProperties;
import ca.alfredcarn.web.mvc.services.books.readRestApi.BookResults;
import ca.alfredcarn.web.mvc.services.books.readRestApi.ReadRestApi;
import ca.alfredcarn.gen.ApplicationLogger;

public class BooksSearchHtmlService {

	public BooksSearchHtmlService(ModelMap mm, String titleOrAuthor, String page) {
		BookResults br = ReadRestApi.read(titleOrAuthor, page);
		bookResultsToModelMap(br, mm, titleOrAuthor, getPageAsInt(page));
	}
	
	private int getPageAsInt(String page) {
		int r = 0;
		try { r = Integer.parseInt(page); } 
		catch( Exception e ) { ApplicationLogger.getInstance().logException("Error in getPageAsInt()", e); }
		return r;
	}
	
	private void bookResultsToModelMap(BookResults br, ModelMap mm, String titleOrAuthor, int page) {
		mm.addAttribute("webRoot", ApplicationProperties.getInstance().getProperty("web.root"));
		mm.addAttribute("bookResults", br.item);
		mm.addAttribute("titleOrAuthor", titleOrAuthor);
		mm.addAttribute("size", Integer.toString(br.item.size()));
		mm.addAttribute("page", Integer.toString(page));
		mm.addAttribute("pageOneBased", Integer.toString(page+1));
		mm.addAttribute("time", new Date().getTime());
	}
	
	public String getView() { return "books"; }
}
