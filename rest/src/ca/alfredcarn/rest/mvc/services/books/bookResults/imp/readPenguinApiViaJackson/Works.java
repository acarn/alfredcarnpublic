package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readPenguinApiViaJackson;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;

@JsonPropertyOrder({ "work" })
public class Works{
	public String uri;
	@JacksonXmlElementWrapper(useWrapping = false)
	public List<Work> work = new ArrayList<Work>();
	public Works() {}
}
