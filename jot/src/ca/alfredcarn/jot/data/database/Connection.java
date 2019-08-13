package ca.alfredcarn.jot.data.database;

import java.sql.PreparedStatement;

public interface Connection {
	public PreparedStatement createPreparedStatement(String sql);
	public boolean beginTransaction();
	public boolean commitTransaction();	
	public boolean rollbackTransaction();
}
