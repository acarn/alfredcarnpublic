package ca.alfredcarn.jot;

import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;
import ca.alfredcarn.jot.data.dataStructures.matrix.imp.MatrixImp;
import ca.alfredcarn.jot.data.dataStructures.matrix.imp.MatrixImpThreadSafe;
import ca.alfredcarn.jot.data.dataStructures.roundRobin.RoundRobin;
import ca.alfredcarn.jot.data.dataStructures.roundRobin.imp.RoundRobinImp;
import ca.alfredcarn.jot.data.dataStructures.roundRobin.imp.RoundRobinImpThreadSafe;
import ca.alfredcarn.jot.data.database.Database;
import ca.alfredcarn.jot.data.database.imp.DatabaseImp;
import ca.alfredcarn.jot.util.url.Url;
import ca.alfredcarn.jot.util.url.imp.UrlImp;

public class Jot {
	
	// Data.
	static public Matrix createMatrix() { return createMatrix(false); }
	static public Matrix createMatrix(boolean threadSafe) { return (threadSafe ? new MatrixImpThreadSafe() : new MatrixImp()); }
	static public <T> RoundRobin<T> createRoundRobin() { return new RoundRobinImp<T>(); }
	static public <T> RoundRobin<T> createRoundRobin(boolean threadSafe) { return (threadSafe ? new RoundRobinImpThreadSafe<T>() : new RoundRobinImp<T>()); }
	static public Database createDatabase() { return new DatabaseImp(); }
	
	// Util.
	static public Url createUrl() { return new UrlImp(); }
}
