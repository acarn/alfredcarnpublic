package ca.alfredcarn.jot.data.database.insert.imp;

import java.sql.PreparedStatement;

import ca.alfredcarn.jot.data.database.Connection;
import ca.alfredcarn.jot.data.database.Database;

class InputToProcessing {

	public static void convert(Database db, Connection c, Ipo ipo) {
		ipo.pr.sql = inputToSql(ipo);
		ipo.pr.ps = inputToPreparedStatement(c, ipo);
	}
	
	private static String inputToSql(Ipo ipo) {
		StringBuilder r = new StringBuilder();
		r.append("INSERT");
		r.append(" INTO " + ipo.in.getTable());
		r.append(" ("); columnNamesToInsertStatement(ipo, r); r.append(" )");
		r.append(" VALUES");
		r.append(" ("); questionMarksToInsertStatement(ipo, r); r.append(" )");
		return r.toString();
	}
	
	private static void columnNamesToInsertStatement(Ipo ipo, StringBuilder r) {
		int s = ipo.in.getMatrix().getColumnsSize();
		for(int i=0; i<s; i++) {
			String cn = ipo.in.getMatrix().getColumnName(i);
			if( 0<i ) { r.append(", "); }
			r.append(cn);
		}
	}
	
	private static void questionMarksToInsertStatement(Ipo ipo, StringBuilder r) {
		int s = ipo.in.getMatrix().getColumnsSize();
		for(int i=0; i<s; i++) {
			if( 0<i ) { r.append(", "); }
			r.append("?");
		}
	}
	
	private static PreparedStatement inputToPreparedStatement(Connection c, Ipo ipo) {
		return c.createPreparedStatement(ipo.pr.sql);
	}
}
