package ca.alfredcarn.web.mvc.services.books;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import ca.alfredcarn.gen.ApplicationLogger;

//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@RequestMapping("/")
public class BooksController {
    
	@RequestMapping( value = "/books/search/{titleOrAuthor}/{page}", method = RequestMethod.GET)
    public String booksSearch(
		ModelMap model
		, @PathVariable("titleOrAuthor") String titleOrAuthor
		, @PathVariable("page") String page) 
	{
		BooksSearchHtmlService bshs = new BooksSearchHtmlService(model, titleOrAuthor, page);
		return bshs.getView();
	}
}
