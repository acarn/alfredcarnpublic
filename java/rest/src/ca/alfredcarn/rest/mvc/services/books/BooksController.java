package ca.alfredcarn.rest.mvc.services.books;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ca.alfredcarn.rest.mvc.services.books.bookResults.BookResults;
 
@RestController
public class BooksController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(@PathVariable String titleOrAuthor, @PathVariable String page) {
    	return "index";
    }
	
    @RequestMapping("/books/{titleOrAuthor}/{page}")
    public BookResults books(@PathVariable String titleOrAuthor, @PathVariable String page) {
    	return BooksSearchXmlService.serve(titleOrAuthor, page);
    }
}
