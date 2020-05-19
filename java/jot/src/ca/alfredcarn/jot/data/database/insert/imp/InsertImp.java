package ca.alfredcarn.jot.data.database.insert.imp;

import ca.alfredcarn.jot.data.database.Connection;
import ca.alfredcarn.jot.data.database.Database;
import ca.alfredcarn.jot.data.database.insert.Insert;
import ca.alfredcarn.jot.data.database.insert.InsertInput;
import ca.alfredcarn.jot.data.database.insert.InsertOutput;

public class InsertImp implements Insert{
	
	private Ipo ipo = new Ipo();
	
	@Override public InsertInput in() { return ipo.in; }
	@Override public InsertOutput out() { return ipo.out; }
	
	public void execute(Database db, Connection c) {
		if( db.getAuthentication().isValid() ) {
			if( in().isValid() ) {
				InputToProcessing.convert(db, c, ipo);
				if( ipo.pr.isValid() ) {
					ProcessingToOutput.convert(db, ipo);
				}
			}
		}
	}
	
	public boolean isProcessed() { return ipo.out.getProcessed(); }
	public boolean hasError() { return (null != ipo.out.getError()); }

	
}
