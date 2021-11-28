import React from 'react';
import { Row, useAsyncDebounce } from 'react-table';

interface ColumnPropsType<T extends Record<string, unknown>> {
	preGlobalFilteredRows: Row<T>[];
	globalFilter: any;
	setGlobalFilter: (filterValue: any) => void;
}

/**
 * Define a default UI for filtering inside the table
 * It will display a text input and it will call the react table methods to update the table
 */
export function GlobalFilter<T extends Record<string, unknown>>({
	preGlobalFilteredRows,
	globalFilter,
	setGlobalFilter,
}: ColumnPropsType<T>): JSX.Element {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = React.useState<string>(globalFilter);
	const onChange = useAsyncDebounce(value => {
		setGlobalFilter(value || undefined);
	}, 200);

	return (
		<label className='flex gap-x-2 items-baseline'>
			<span className='text-gray-700'>Search: </span>
			<input
				type='text'
				className='rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
				value={value || ''}
				onChange={e => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} records...`}
			/>
		</label>
	);
}
