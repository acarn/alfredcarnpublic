package ca.alfredcarn.jot.data.database.insert;

import java.util.List;

public interface InsertOutput {
	public boolean getProcessed();
	public boolean setProcessed(boolean processed);
	public InsertError getError();
	public boolean setError(InsertError error);
	public List<Boolean> getInserted();
}
