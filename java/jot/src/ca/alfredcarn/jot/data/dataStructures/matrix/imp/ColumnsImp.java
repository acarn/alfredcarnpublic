package ca.alfredcarn.jot.data.dataStructures.matrix.imp;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;

import ca.alfredcarn.jot.data.dataStructures.matrix.Column;
import ca.alfredcarn.jot.data.dataStructures.matrix.Columns;
import ca.alfredcarn.jot.data.dataStructures.matrix.Matrix;

class ColumnsImp implements Columns{

	private Matrix matrix = null;
	private ArrayList<ColumnAsObject> byIndex = new ArrayList<ColumnAsObject>();
	private HashMap<String, Integer> byName = new HashMap<String, Integer>();
	
	public ColumnsImp(Matrix matrix) { this.matrix = matrix; }
	
	@Override
	public <T> Column<T> nextColumn(String columnName, Class<T> columnClass) {
		return (canAccept(columnName, columnClass) ? 
				acceptColumn( new ColumnImp<T>(matrix, columnName, columnClass) ) : 
				null);
	}
	
	@Override
	public Column<String> nextColumn(String columnName, int maxLength) {
		return (canAccept(columnName, String.class) ? 
				acceptColumn( new ColumnImp<String>(matrix, columnName,String.class, maxLength) ) : 
				null);
	}
	
	private <T> boolean canAccept(String columnName, Class<T> columnClass) {
		return (("" != columnName) && (null!=columnClass) &&
				(!byName.containsKey(columnName)) && 
				(isSupportedColumnClass(columnClass)));
	}

	private <T> boolean isSupportedColumnClass(Class<T> columnClass) {
		boolean r = false;
		String ccn = columnClass.getName();
		if( "java.lang.Boolean" == ccn ||
			"java.lang.Integer" == ccn ||
			"java.lang.Long" 	== ccn ||
			"java.lang.Double"  == ccn ||
			"java.lang.Float" 	== ccn ||
			"java.util.Date" 	== ccn ||
			"java.lang.String"  == ccn ) { 
			r = true;
		}
		return r;
	}
	
	private <T> Column<T> acceptColumn(Column<T> column) {
		ColumnAsObject cao = new ColumnAsObject();
		cao.columnClassName = column.getColumnClass().getName();
		cao.column = column;
		byIndex.add(cao);
		byName.put(column.getColumnName(), byIndex.size()-1);
		return column;
	}

	@Override public int getColumnsSize() { return byIndex.size(); }
	
	@SuppressWarnings("unchecked")
	@Override
	public <T> Column<T> getColumn(int columnIndex, Class<T> columnClass) {
		Column<T> r = null;
		if( 0<=columnIndex && columnIndex<byIndex.size() ) {
			ColumnAsObject cao = byIndex.get(columnIndex);
			if( cao.columnClassName == columnClass.getName() ) {
				try { r = (Column<T>)cao.column; }
				catch(Exception e) { /* Do nothing. */ }	
			}
		}
		return r;
	}

	@Override
	public <T> Column<T> getColumn(String columnName, Class<T> columnClass) {
		Column<T> r = null;
		if( byName.containsKey(columnName) ) {
			int ci = byName.get(columnName);
			r = getColumn(ci, columnClass);
		}
		return r;
	}

	@Override
	public String getColumnClassName(int columnIndex) {
		String r = "";
		if( 0<=columnIndex && columnIndex<byIndex.size() ) {
			ColumnAsObject cao = byIndex.get(columnIndex);
			r = cao.columnClassName;
		}
		return r;
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public String getColumnName(int columnIndex) {
		String r = "";
		if( 0<=columnIndex && columnIndex<byIndex.size() ) {
			ColumnAsObject cao = byIndex.get(columnIndex);
			String ccn = cao.columnClassName;
			if( 	 "java.lang.Boolean" == ccn ) { r = ((Column<Boolean>)cao.column).getColumnName(); }
			else if( "java.lang.Integer" == ccn ) { r = ((Column<Integer>)cao.column).getColumnName(); }
			else if( "java.lang.Long" 	 == ccn ) { r = ((Column<Long>)   cao.column).getColumnName(); }
			else if( "java.lang.Double"  == ccn ) { r = ((Column<Double>) cao.column).getColumnName(); }
			else if( "java.lang.Float" 	 == ccn ) { r = ((Column<Float>)  cao.column).getColumnName(); }
			else if( "java.util.Date" 	 == ccn ) { r = ((Column<Date>)   cao.column).getColumnName(); }
			else if( "java.lang.String"  == ccn ) { r = ((Column<String>) cao.column).getColumnName(); }
		}
		return r;
	}
	
	@Override
	public <T> boolean hasColumn(Column<T> column) {
		Column<T> c = (null==column) ? null : 
			getColumn( column.getColumnName(), column.getColumnClass() );
		return ( (null==c) ? false : c.equals(column) );
	}
}
