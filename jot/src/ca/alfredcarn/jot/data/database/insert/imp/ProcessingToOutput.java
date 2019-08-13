package ca.alfredcarn.jot.data.database.insert.imp;

import java.util.Date;

import ca.alfredcarn.jot.data.dataStructures.matrix.Column;
import ca.alfredcarn.jot.data.database.Database;

import java.sql.PreparedStatement;
import java.sql.SQLException;

class ProcessingToOutput {
	
	public static void convert(Database db, Ipo ipo) {
		int rs = ipo.in.getMatrix().getRowsSize();
		int cs = ipo.in.getMatrix().getColumnsSize();
		process(ipo, rs, cs);
	}
	
	private static void process(Ipo ipo, int rs, int cs) {
		try { processPreparedStatement(ipo, rs, cs); }
		catch( SQLException e ) { 
			ipo.out.setError( new InsertErrorImp(
				e, 
				ipo.pr.ri, 
				ipo.pr.ci, 
				ipo.in.getMatrix().getColumnName( ipo.pr.ci ))); 
		}
	}
	
	private static void processPreparedStatement(Ipo ipo, int rs, int cs) throws SQLException {
		ipo.out.setProcessed(true);
		for(ipo.pr.ri=0; ipo.pr.ri<rs; ipo.pr.ri++) {
			clearRow(ipo);
			for(ipo.pr.ci=0; ipo.pr.ci<cs; ipo.pr.ci++) { cellToRow(ipo); }
			rowToBatch(ipo);
			if( shouldExecuteBatch(ipo, rs) ) { executeBatch(ipo); }
		}
	}
	
	private static void clearRow(Ipo ipo) throws SQLException{ ipo.pr.ps.clearParameters(); }
	
	private static void rowToBatch(Ipo ipo) throws SQLException{ ipo.pr.ps.addBatch(); }
	
	private static Boolean shouldExecuteBatch(Ipo ipo, int rs) {
		boolean reachedBatchSize = (0 == Math.floorMod(ipo.pr.ri+1, ipo.in.getBatchSize()));
		boolean reachedLastRow = (ipo.pr.ri == (rs-1));
		return (reachedBatchSize || reachedLastRow);
	}
	
	private static void executeBatch(Ipo ipo) throws SQLException{
		int[] o = ipo.pr.ps.executeBatch();
		int l = o.length;
		for(int x=0; x<l; x++) {
			boolean b = (PreparedStatement.EXECUTE_FAILED != o[x]);
			ipo.out.getInserted().add(b);
		}
	}
	
	private static void cellToRow(Ipo ipo) throws SQLException{
		String cn = ipo.in.getMatrix().getColumnName(ipo.pr.ci);
		String ccn = ipo.in.getMatrix().getColumnClassName(ipo.pr.ci);
		if( 	 "java.lang.Boolean" == ccn ) { BooleanToPs(ipo, cn); }
		else if( "java.lang.Integer" == ccn ) { IntegerToPs(ipo, cn); }
		else if( "java.lang.Long" 	 == ccn ) { LongToPs(ipo, cn); }
		else if( "java.lang.Double"  == ccn ) { DoubleToPs(ipo, cn); }
		else if( "java.lang.Float" 	 == ccn ) { FloatToPs(ipo, cn); }
		else if( "java.util.Date" 	 == ccn ) { DateToPs(ipo, cn); }
		else if( "java.lang.String"  == ccn ) { StringToPs(ipo, cn); }
		else { throw new SQLException("Unrecognized column type in <" + ccn + ">."); }
	}
	
	private static void BooleanToPs(Ipo ipo, String cn) throws SQLException {
		Column<Boolean> c = (Column<Boolean>)ipo.in.getMatrix().getColumn(cn, Boolean.class);
		Boolean v = ipo.in.getMatrix().getRow(ipo.pr.ri).getCell(c);
		ipo.pr.ps.setBoolean(ipo.pr.ci + /*One-based*/1, v);
	}
	
	private static void IntegerToPs(Ipo ipo, String cn) throws SQLException {
		Column<Integer> c = (Column<Integer>)ipo.in.getMatrix().getColumn(cn, Integer.class);
		Integer v = ipo.in.getMatrix().getRow(ipo.pr.ri).getCell(c);
		ipo.pr.ps.setInt(ipo.pr.ci + /*One-based*/1, v);
	}
	
	private static void LongToPs(Ipo ipo, String cn) throws SQLException {
		Column<Long> c = (Column<Long>)ipo.in.getMatrix().getColumn(cn, Long.class);
		Long v = ipo.in.getMatrix().getRow(ipo.pr.ri).getCell(c);
		ipo.pr.ps.setLong(ipo.pr.ci + /*One-based*/1, v);
	}

	private static void DoubleToPs(Ipo ipo, String cn) throws SQLException {
		Column<Double> c = (Column<Double>)ipo.in.getMatrix().getColumn(cn, Double.class);
		Double v = ipo.in.getMatrix().getRow(ipo.pr.ri).getCell(c);
		ipo.pr.ps.setDouble(ipo.pr.ci + /*One-based*/1, v);
	}

	private static void FloatToPs(Ipo ipo, String cn) throws SQLException {
		Column<Float> c = (Column<Float>)ipo.in.getMatrix().getColumn(cn, Float.class);
		Float v = ipo.in.getMatrix().getRow(ipo.pr.ri).getCell(c);
		ipo.pr.ps.setFloat(ipo.pr.ci + /*One-based*/1, v);
	}

	private static void DateToPs(Ipo ipo, String cn) throws SQLException {
		Column<Date> c = (Column<Date>)ipo.in.getMatrix().getColumn(cn, Date.class);
		Date v = ipo.in.getMatrix().getRow(ipo.pr.ri).getCell(c);
		java.sql.Date sd = new java.sql.Date( v.getTime() );
		ipo.pr.ps.setDate(ipo.pr.ci + /*One-based*/1, sd);
	}

	private static void StringToPs(Ipo ipo, String cn) throws SQLException {
		Column<String> c = (Column<String>)ipo.in.getMatrix().getColumn(cn, String.class);
		String v = ipo.in.getMatrix().getRow(ipo.pr.ri).getCell(c);
		ipo.pr.ps.setString(ipo.pr.ci + /*One-based*/1, v);
	}
}
