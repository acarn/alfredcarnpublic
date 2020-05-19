package ca.alfredcarn.jot.data.dataStructures.matrix;

public interface Row {
	public <T> T getCell(Column<T> column) throws IllegalArgumentException;
	public <T> boolean setCell(Column<T> column, T value);
}
