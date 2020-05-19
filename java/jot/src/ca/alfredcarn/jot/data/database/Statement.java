package ca.alfredcarn.jot.data.database;

public interface Statement {
	public void execute(Database db, Connection c);
	public boolean isProcessed();
	public boolean hasError();
}
