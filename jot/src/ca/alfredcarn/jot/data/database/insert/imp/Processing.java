package ca.alfredcarn.jot.data.database.insert.imp;

import java.sql.PreparedStatement;

class Processing {
	public String sql;
	public PreparedStatement ps;
	
	// These are set during processing.
	public int ri=-1; // Row index.
	public int ci=-1; // Column index.
	
	public boolean isValid() { return ((""!=sql) && (null!=ps)); }
}
