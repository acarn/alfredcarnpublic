package ca.alfredcarn.jot.data.database.insert;

import ca.alfredcarn.jot.data.database.Statement;

public interface Insert extends Statement {
	public InsertInput in();
	public InsertOutput out();
}
