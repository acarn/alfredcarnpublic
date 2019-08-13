package ca.alfredcarn.jot.data.database.insert.imp;

import java.util.ArrayList;
import java.util.List;

import ca.alfredcarn.jot.data.database.insert.InsertError;
import ca.alfredcarn.jot.data.database.insert.InsertOutput;

public class InsertOutputImp implements InsertOutput {
	private boolean processed = false;
	private InsertError error = null;
	private ArrayList<Boolean> inserted = new ArrayList<Boolean>();
	@Override public boolean getProcessed() { return processed; }
	@Override public boolean setProcessed(boolean processed) { this.processed = processed; return true;}
	@Override public InsertError getError() { return error; }
	@Override public boolean setError(InsertError error) { this.error = error; return true; }
	@Override public List<Boolean> getInserted() { return inserted; }
}
