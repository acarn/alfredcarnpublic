package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readPenguinApiViaJackson;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonPropertyOrder({ "titleweb", "titleSubtitleAuth", "authorweb" })
public class Work{
	
	public String uri;
	
	@JsonProperty("titleweb")
	public String titleweb;
	
	@JsonProperty("titleSubtitleAuth")
	public String titleSubtitleAuth;
	
	@JsonProperty("authorweb")
	public String authorweb;
	
	// Extracted from titleSubtitleAuth.
	public String getSubtitle() {
		String[] spl = titleSubtitleAuth.split(":");
		return ((2<=spl.length) ? spl[1].trim() : "");
	}
	
	public Work() {}
}
