package ca.alfredcarn.jot.data.dataStructures.matrix.imp;

import ca.alfredcarn.jot.data.dataStructures.matrix.Column;
import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;

public class ColumnImp<T> implements Column<T>{

	private Matrix matrix = null;
	private String columnName = "";
	private Class<T> columnClass = null;
	private int maxLength = 0;
	
	public ColumnImp(Matrix matrix, String columnName, Class<T>columnClass) { 
		this.matrix = matrix;
		this.columnName = columnName;
		this.columnClass = columnClass;
	}
	
	public ColumnImp(Matrix matrix, String columnName, Class<T>columnClass, int maxLength) {
		this.matrix = matrix;
		this.columnName = columnName;
		this.columnClass = columnClass;
		this.maxLength = maxLength;
	}
	
	public Matrix getMatrix() { return matrix; }
	
	@Override public String getColumnName() { return columnName; }
	@Override public Class<T> getColumnClass() { return columnClass; }
	@Override public int getMaxLength() { return maxLength; }
}
