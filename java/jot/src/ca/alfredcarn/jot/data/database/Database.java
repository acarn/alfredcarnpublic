package ca.alfredcarn.jot.data.database;

import ca.alfredcarn.jot.data.database.insert.Insert;

public interface Database {
	public Authentication getAuthentication();
	public Properties getProperties();
	public Transaction createTransaction();
	public Insert createInsert();
	public boolean execute(Statement s) throws DatabaseException;
	public void execute(Transaction t) throws DatabaseException;
}
