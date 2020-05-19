package ca.alfredcarn.jot.data.dataStructures.matrix.imp;

import java.util.HashMap;

import ca.alfredcarn.jot.data.dataStructures.matrix.Column;
import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;
import ca.alfredcarn.jot.data.dataStructures.matrix.Row;

public class RowImp implements Row{
	
	private Matrix matrix = null;
	private HashMap<String, Object> cells = new HashMap<String, Object>();

	public RowImp(Matrix matrix) { this.matrix = matrix; }
	
	public Matrix getMatrix() { return matrix; }

	@SuppressWarnings("unchecked")
	@Override
	public <T> T getCell(Column<T> column) throws IllegalArgumentException {
		T r = null;
		IllegalArgumentException err = new IllegalArgumentException("Unable to get cell.");
		if( matrix.hasColumn(column)) {
			try { 
				r = (T)cells.get(column.getColumnName());
				err = null; 
			} catch(Exception e) { /* Do nothing. */ }
		}
		if( null!=err ) { throw err; }
		return r;
	}
	
	@Override
	public <T> boolean setCell(Column<T> column, T value) {
		boolean r = false;
		if( matrix.hasColumn(column)) {
			if( String.class.getName() == 
				(column.getColumnClass().getName()) ){
				value = validateStringValue(column, value);
			}
			cells.put(column.getColumnName(), value);
			r = true;
		}
		return r;
	}
	
	@SuppressWarnings("unchecked")
	private <T> T validateStringValue(Column<T> column, T value) {
		T r = value;
		try { r = (T)validateStringLength(
				(Column<String>)column, (String)value); }
		catch( Exception e ) { /* Do nothing. */ }
		return r;
	}
	
	private String validateStringLength(Column<String> column, String value) {
		String r = value;
		if( null != value ) {
			int ml = column.getMaxLength();
			if( 0<ml ) {
				String sv = (String)value;
				if( ml < sv.length() ) {
					r = sv.substring(0, ml);
				}
			}
		}
		return r;
	}
}
