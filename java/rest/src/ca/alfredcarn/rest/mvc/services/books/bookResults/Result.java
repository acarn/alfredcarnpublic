package ca.alfredcarn.rest.mvc.services.books.bookResults;

public class Result {

	private String title;
	private String author;
	private String subTitle;
	
	public Result(String title, String author, String subTitle) {
		this.title = title;
		this.author = author;
		this.subTitle = subTitle;
	}
	
	public String getTitle() { return title; }
	public String getAuthor() { return author; }
	public String getSubtitle() { return subTitle; }
}