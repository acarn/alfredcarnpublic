package ca.alfredcarn.jot.data.dataStructures.matrix.imp;

import ca.alfredcarn.jot.data.dataStructures.matrix.Column;
import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;
import ca.alfredcarn.jot.data.dataStructures.matrix.Row;

public class MatrixImpThreadSafe implements Matrix{
	private MatrixImp mi = new MatrixImp();
	@Override synchronized public <T> Column<T> nextColumn(String columnName, Class<T> columnClass) { return mi.nextColumn(columnName, columnClass); }
	@Override synchronized public Column<String> nextColumn(String columnName, int maxLength) { return mi.nextColumn(columnName, maxLength); }
	@Override synchronized public int getColumnsSize() { return mi.getColumnsSize(); }
	@Override synchronized public <T> Column<T> getColumn(int columnIndex, Class<T> columnClass) { return mi.getColumn(columnIndex, columnClass); }
	@Override synchronized public <T> Column<T> getColumn(String columnName, Class<T> columnClass) { return mi.getColumn(columnName, columnClass); }
	@Override synchronized public String getColumnClassName(int columnIndex) { return mi.getColumnClassName(columnIndex); }
	@Override synchronized public String getColumnName(int columnIndex) { return mi.getColumnName(columnIndex); }
	@Override synchronized public <T> boolean hasColumn(Column<T> column) { return mi.hasColumn(column); }
	@Override synchronized public Row nextRow() { return mi.nextRow(); }
	@Override synchronized public int getRowsSize() { return mi.getRowsSize(); }
	@Override synchronized public Row getRow(int rowIndex) { return mi.getRow(rowIndex); }
}
