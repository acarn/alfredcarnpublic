package ca.alfredcarn.jot.data.dataStructures.matrix;

public interface Columns {	
	public <T> Column<T> nextColumn(String columnName, Class<T> columnClass);
	public Column<String> nextColumn(String columnName, int maxLength);
	public int getColumnsSize();
	public <T> Column<T> getColumn(int columnIndex, Class<T> columnClass);
	public <T> Column<T> getColumn(String columnName, Class<T> columnClass);
	public String getColumnClassName(int columnIndex);
	public String getColumnName(int columnIndex);
	public <T> boolean hasColumn(Column<T> column);
}
