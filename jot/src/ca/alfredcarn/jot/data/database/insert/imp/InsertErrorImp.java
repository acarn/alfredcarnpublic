package ca.alfredcarn.jot.data.database.insert.imp;

import java.sql.SQLException;

import ca.alfredcarn.jot.data.database.insert.InsertError;

public class InsertErrorImp implements InsertError {
	private SQLException exception;
	private int rowIndex;
	private int columnIndex;
	private String columnName;
	
	public InsertErrorImp(SQLException exception, int rowIndex, int columnIndex, String columnName) {
		this.exception = exception;
		this.rowIndex = rowIndex;
		this.columnIndex = columnIndex;
		this.columnName = columnName;
	}

	@Override public SQLException getException() { return exception; }
	@Override public int getRowIndex() { return rowIndex; }
	@Override public int getColumnIndex() { return columnIndex; }
	@Override public String getColumnName() { return columnName; }
}
