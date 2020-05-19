package ca.alfredcarn.jot.data.dataStructures.matrix.imp;

import ca.alfredcarn.jot.data.dataStructures.matrix.Column;
import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;
import ca.alfredcarn.jot.data.dataStructures.matrix.Row;

public class MatrixImp implements Matrix{
	private ColumnsImp cols = new ColumnsImp(this);
	private RowsImp rows = new RowsImp(this);
	@Override public <T> Column<T> nextColumn(String columnName, Class<T> columnClass) { return cols.nextColumn(columnName, columnClass); }
	@Override public Column<String> nextColumn(String columnName, int maxLength) { return cols.nextColumn(columnName, maxLength); }
	@Override public int getColumnsSize() { return cols.getColumnsSize(); }
	@Override public <T> Column<T> getColumn(int columnIndex, Class<T> columnClass) { return cols.getColumn(columnIndex, columnClass); }
	@Override public <T> Column<T> getColumn(String columnName, Class<T> columnClass) { return cols.getColumn(columnName, columnClass); }
	@Override public String getColumnClassName(int columnIndex) { return cols.getColumnClassName(columnIndex); }
	@Override public String getColumnName(int columnIndex) { return cols.getColumnName(columnIndex); }
	@Override public <T> boolean hasColumn(Column<T> column) { return cols.hasColumn(column); }
	@Override public Row nextRow() { return rows.nextRow(); }
	@Override public int getRowsSize() { return rows.getRowsSize(); }
	@Override public Row getRow(int rowIndex) { return rows.getRow(rowIndex); }
}
