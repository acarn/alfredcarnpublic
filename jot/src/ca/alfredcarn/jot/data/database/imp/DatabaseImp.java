package ca.alfredcarn.jot.data.database.imp;

import ca.alfredcarn.jot.data.database.Authentication;
import ca.alfredcarn.jot.data.database.Connection;
import ca.alfredcarn.jot.data.database.Database;
import ca.alfredcarn.jot.data.database.DatabaseException;
import ca.alfredcarn.jot.data.database.Properties;
import ca.alfredcarn.jot.data.database.Statement;
import ca.alfredcarn.jot.data.database.Transaction;
import ca.alfredcarn.jot.data.database.Transaction.Status;
import ca.alfredcarn.jot.data.database.imp.connection.ConnectionPool;
import ca.alfredcarn.jot.data.database.imp.connection.ConnectionPools;
import ca.alfredcarn.jot.data.database.insert.Insert;
import ca.alfredcarn.jot.data.database.insert.imp.InsertImp;

public class DatabaseImp implements Database{
	private Authentication auth = new AuthenticationImp();
	private Properties prop = new PropertiesImp();
	
	@Override public Authentication getAuthentication() { return auth; }
	@Override public Properties getProperties() { return prop; }
	@Override public Transaction createTransaction() { return new TransactionImp(); }
	@Override public Insert createInsert() { return new InsertImp(); }
	
	@Override
	public boolean execute(Statement s) throws DatabaseException{
		Transaction t = createTransaction();
		t.addStatement(s);
		execute(t);
		return (Status.SUCCESS == t.getStatus());
	}
	
	@Override public void execute(Transaction t) throws DatabaseException{
		t.setStatus(Status.FAILURE);
		if( 0<t.getStatementsSize() ) {
			Connection c = acquire();
			if( null!=c ) {
				executeTransaction(c, t);
				release(c);
			}
		}
	}
	
	private Connection acquire() throws DatabaseException{
		ConnectionPool<Connection> p = ConnectionPools.getInstance().getPool(this);
		try { return ((null==p) ? null : p.acquire()); }
		catch(Exception e) { throw new DatabaseException( e.getMessage()); }
	}
	
	private void release(Connection c) {
		ConnectionPool<Connection> p = ConnectionPools.getInstance().getPool(this);
		if( null!=p ) { p.release(c); }
	}
	
	private void executeTransaction(Connection c, Transaction t) {
		if( c.beginTransaction() ) {
			int sz = t.getStatementsSize();
			for( int x=0; x<sz; x++ ) {
				Statement s = t.getStatement(x);
				s.execute(this, c);
				if( isFailed(s) ) { c.rollbackTransaction(); break; }
				else if( x==(sz-1) ) { 
					if( c.commitTransaction() ) { 
						t.setStatus(Status.SUCCESS); 
					} else { c.rollbackTransaction(); }
				}
			}
		}
	}
	
	private boolean isFailed(Statement s) { return ((!s.isProcessed()) || s.hasError()); }
}
