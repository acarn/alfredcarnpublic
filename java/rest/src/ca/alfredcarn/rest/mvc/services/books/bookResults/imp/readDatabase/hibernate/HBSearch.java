package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.hibernate;

public class HBSearch {
	private int SEARCH_ID = -1;
	private String TEXT = "";
	private int PAGE = -1;
	
	public int getSEARCH_ID() { return SEARCH_ID; }
	public void setSEARCH_ID(int SEARCH_ID) { this.SEARCH_ID = SEARCH_ID; }
	
	public String getTEXT() { return TEXT; }
	public void setTEXT(String TEXT) { this.TEXT = TEXT; }
	
	public int getPAGE() { return PAGE; }
	public void setPAGE(int PAGE) { this.PAGE = PAGE; }
}
