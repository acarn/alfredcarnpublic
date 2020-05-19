package ca.alfredcarn.jot.data.dataStructures.matrix;

public interface Rows {
	public Row nextRow();
	public int getRowsSize();
	public Row getRow(int rowIndex);
}
