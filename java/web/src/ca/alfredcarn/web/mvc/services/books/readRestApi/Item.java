package ca.alfredcarn.web.mvc.services.books.readRestApi;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonPropertyOrder({ "title", "author", "subtitle" })
public class Item {
	
	// NOTE: Getters and setters not necessary for jackson, 
	// but getters are necessary for jstl to read.
	
	@JsonProperty("title")
	public String title;
	public String getTitle() { return title; }
	public void setTitle(String value) { title = value; }
	
	@JsonProperty("author")
	public String author;
	public String getAuthor() { return author; }
	public void setAuthor(String value) { author = value; }
	
	@JsonProperty("subtitle")
	public String subtitle;
	public String getSubtitle() { return subtitle; }
	public void setSubtitle(String value) { subtitle = value; }
}
