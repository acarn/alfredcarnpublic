package ca.alfredcarn.jot.data.database.imp;

import java.util.ArrayList;

import ca.alfredcarn.jot.data.database.Statement;
import ca.alfredcarn.jot.data.database.Transaction;

public class TransactionImp implements Transaction {
	private ArrayList<Statement> a = new ArrayList<Statement>();
	private Status status = Status.NOT_EXECUTED;
	@Override public void addStatement(Statement statement) { a.add(statement); }
	@Override public int getStatementsSize() { return a.size(); }
	@Override public Statement getStatement(int index) { return a.get(index); }
	@Override public void setStatus(Status status) { if( status!=Status.NOT_EXECUTED ) { this.status = status; } }
	@Override public Status getStatus() { return status; }
}
