package ca.alfredcarn.jot.data.database.insert;

import java.sql.SQLException;

public interface InsertError {
	public SQLException getException();
	public int getRowIndex();
	public int getColumnIndex();
	public String getColumnName();
}
