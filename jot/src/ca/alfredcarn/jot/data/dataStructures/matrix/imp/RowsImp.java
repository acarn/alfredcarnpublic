package ca.alfredcarn.jot.data.dataStructures.matrix.imp;

import java.util.ArrayList;

import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;
import ca.alfredcarn.jot.data.dataStructures.matrix.Row;
import ca.alfredcarn.jot.data.dataStructures.matrix.Rows;

public class RowsImp implements Rows{
	
	private Matrix matrix = null;
	private ArrayList<Row> byIndex = new ArrayList<Row>();
	
	public RowsImp(Matrix matrix) { this.matrix = matrix; }
	
	@Override
	public Row nextRow() {
		Row r = new RowImp(matrix);
		byIndex.add(r);
		return r;
	}
	
	@Override public int getRowsSize() { return byIndex.size(); }

	@Override
	public Row getRow(int rowIndex) {
		Row r = null;
		if( 0<=rowIndex && rowIndex<byIndex.size() ) {
			r = byIndex.get(rowIndex);
		}
		return r;
	}
}
