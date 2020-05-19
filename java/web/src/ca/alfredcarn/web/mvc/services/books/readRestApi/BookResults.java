package ca.alfredcarn.web.mvc.services.books.readRestApi;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;

@JsonPropertyOrder({ "item" })
public class BookResults {
	@JacksonXmlElementWrapper(useWrapping = false)
	public List<Item> item = new ArrayList<Item>();
	public BookResults() {}
}
