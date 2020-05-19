package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.writeDatabase;

import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.data.dataStructures.matrix.Column;
import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;
import ca.alfredcarn.jot.data.database.Authentication;
import ca.alfredcarn.jot.data.database.Database;
import ca.alfredcarn.jot.data.database.DatabaseException;
import ca.alfredcarn.jot.data.database.Transaction;
import ca.alfredcarn.jot.data.database.insert.Insert;
import ca.alfredcarn.gen.ApplicationProperties;

// This class demonstrates the use of the Jot library for INSERT statements and connection pooling.
public class WriteDatabase {
	
	private static Database db = Jot.createDatabase();
	
	static {
		Authentication a = db.getAuthentication();
		ApplicationProperties ap = ApplicationProperties.getInstance();
		a.setConnectionString(ap.getProperty("hibernate.connection.url"));
		a.setUserName(ap.getProperty("hibernate.connection.username"));
		a.setPassword(ap.getProperty("hibernate.connection.password"));
	}

	public class Operation{
		public class Searches{
			public Matrix matrix = Jot.createMatrix();
			public Column<String> TEXT = matrix.nextColumn("TEXT", String.class);
			public Column<Integer> PAGE = matrix.nextColumn("PAGE", Integer.class);
			public Insert insert = db.createInsert();
			public Searches() {
				insert.in().setTable("BOOKS_SEARCHES");
				insert.in().setMatrix(matrix);
			}
		}
		
		public class Results {
			public Matrix matrix = Jot.createMatrix();
			public Column<Integer> SEARCH_ID = matrix.nextColumn("SEARCH_ID", Integer.class);
			public Column<Integer> WORK_ID = matrix.nextColumn("WORK_ID", Integer.class);
			public Column<String> TITLE = matrix.nextColumn("TITLE", 1000);
			public Column<String> SUBTITLE = matrix.nextColumn("SUBTITLE", 1000);
			public Column<String> AUTHOR = matrix.nextColumn("AUTHOR", 1000);
			public Insert insert = db.createInsert();
			public Results() {
				insert.in().setTable("BOOKS_RESULTS");
				insert.in().setMatrix(matrix);
			}
		}
		
		public Searches searches = new Searches();
		public Results results = new Results();
		public Transaction transaction = db.createTransaction();
		public Operation() {
			transaction.addStatement(searches.insert);
			transaction.addStatement(results.insert);
		}
		
		public void write() throws DatabaseException{
			db.execute(transaction);
		}
	}
	
	public Operation createOperation() {
		return new Operation();
	}
}
