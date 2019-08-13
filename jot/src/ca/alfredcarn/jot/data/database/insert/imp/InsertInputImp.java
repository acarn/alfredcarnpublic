package ca.alfredcarn.jot.data.database.insert.imp;

import ca.alfredcarn.jot.Jot;
import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;
import ca.alfredcarn.jot.data.database.insert.InsertInput;

public class InsertInputImp implements InsertInput{
	private String table = ""; 
	private Matrix matrix = Jot.createMatrix();
	private int batchSize = 100;
	@Override public String getTable() { return table; }
	@Override public boolean setTable(String table) { this.table = table; return true; }
	@Override public Matrix getMatrix() { return matrix; }
	@Override public boolean setMatrix(Matrix matrix) { this.matrix = matrix; return true; }
	@Override public int getBatchSize() { return batchSize; } 
	@Override public boolean setBatchSize(Integer batchSize) { this.batchSize = batchSize; return true; }
	@Override public boolean isValid() {
		Integer cs = matrix.getColumnsSize();
		return ( (""!=table) && (0<cs) && (0<batchSize) ); 
	}
}
