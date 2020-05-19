package ca.alfredcarn.jot.data.database.imp.connection;

import java.sql.PreparedStatement;
import java.sql.SQLException;

import ca.alfredcarn.jot.data.database.Connection;

class ConnectionImp implements Connection{
	private final java.sql.Connection raw;
	private SQLException x = null;
	
	public ConnectionImp(java.sql.Connection raw) { this.raw = raw; }
	public void finalize() { close(); } // Implemented but cannot be relied upon. See ConnectionPool.onDestruct();
	
	public SQLException getException() { return x; }
	private void setException(SQLException e) { if( null==x ) { x=e; } }
	
	public boolean close(){
		boolean r = false;
		try{ raw.close(); r=true; }
		catch(SQLException e) { setException(e); }
		System.out.println( "Jot: Connection [" + Integer.toString(hashCode()) + "] was " + (r ? "successfully " : "not ") + "closed.");
		return r;
	}
	
	public boolean isClosed() {
		boolean r = false;
		try{ r = raw.isClosed(); }
		catch( SQLException e ) { setException(e); }
		return r;
	}
	
	@Override public PreparedStatement createPreparedStatement(String sql) {
		PreparedStatement r = null;
		try { r = raw.prepareStatement(sql); }
		catch( SQLException e ) { setException(e); }
		return r;
	}
	
	@Override public boolean beginTransaction() {
		boolean r = false;
		try{ raw.setAutoCommit(false); r=true; }
		catch ( SQLException e ) { setException(e); }
		return r;
	}
	
	@Override public boolean commitTransaction() {
		boolean r = false;
		try{ raw.commit(); r=true; }
		catch( SQLException e ) { setException(e); }
		return r;
	}
	
	@Override public boolean rollbackTransaction() {
		boolean r = false;
		try{ raw.rollback(); r=true; }
		catch( SQLException e) { setException(e); }
		return r;
	}
}
