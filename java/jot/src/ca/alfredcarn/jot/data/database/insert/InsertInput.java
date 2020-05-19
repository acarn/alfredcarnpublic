package ca.alfredcarn.jot.data.database.insert;

import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;

public interface InsertInput {
	public String getTable();
	public boolean setTable(String table);
	public Matrix getMatrix();
	public boolean setMatrix(Matrix matrix);
	public int getBatchSize();
	public boolean setBatchSize(Integer batchSize);
	public boolean isValid();
}
