package ca.alfredcarn.jot.data.database;

public class DatabaseException extends Exception{
	
	private static final long serialVersionUID = 1L;

	public DatabaseException(String reason) {
		super(reason);
	}
}
