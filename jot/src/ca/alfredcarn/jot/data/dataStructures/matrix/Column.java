package ca.alfredcarn.jot.data.dataStructures.matrix;

public interface Column<T> {
	public String getColumnName();
	public Class<T> getColumnClass();
	public int getMaxLength(); // Only supported for T=String.
}
