import React from 'react';
import { FilterProps, Row } from 'react-table';

/**
 * This is a custom filter UI for selecting a unique option from a list
 * It will diplay the column name and a select box with options
 */
export function SelectColumnFilter<T extends Record<string, unknown>>({
	column: { filterValue, setFilter, preFilteredRows, id, render },
}: FilterProps<T>) {
	// Calculate the options for filtering using the preFilteredRows
	const options = React.useMemo(() => {
		const options = new Set<string>();
		preFilteredRows.forEach((row: Row<T>) => {
			options.add(row.values[id]);
		});
		return [...options.values()];
	}, [id, preFilteredRows]);

	return (
		<label className='flex gap-x-2 items-baseline'>
			<span className='text-gray-700'>{render('Header')}: </span>
			<select
				className='rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
				name={id}
				id={id}
				value={filterValue}
				onChange={e => {
					setFilter(e.target.value || undefined);
				}}>
				<option value=''>All</option>
				{options.map((option, i) => (
					<option key={i} value={option}>
						{option}
					</option>
				))}
			</select>
		</label>
	);
}
