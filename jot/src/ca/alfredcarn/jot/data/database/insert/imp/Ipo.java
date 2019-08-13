package ca.alfredcarn.jot.data.database.insert.imp;

import ca.alfredcarn.jot.data.database.insert.InsertInput;
import ca.alfredcarn.jot.data.database.insert.InsertOutput;

class Ipo{
	public final InsertInput in = new InsertInputImp();
	public final Processing pr = new Processing();
	public final InsertOutput out = new InsertOutputImp();	
}
