package ca.alfredcarn.jot.data.database;

public interface Transaction {
	public void addStatement(Statement statement);
	public int getStatementsSize();
	public Statement getStatement(int index);
	public enum Status { NOT_EXECUTED, SUCCESS, FAILURE }
	public void setStatus(Status status);
	public Status getStatus();
}
