import React from 'react';
import { Column } from 'react-table';
import { getData, PersonData } from './api/api';
import Table from './Table';
import { columnsStructure } from './table/Columns';

function App(): JSX.Element {
	// React table wants that columns and data are memoized
	const columns: Column<PersonData>[] = React.useMemo(() => columnsStructure, []);
	const data: PersonData[] = React.useMemo(() => getData(), []);

	return (
		<div className='min-h-screen bg-gray-100 text-gray-900'>
			<main className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
				<div className=''>
					<h1 className='text-xl font-semibold'>React Table + Tailwind CSS = ❤</h1>
				</div>
				<div className='mt-6'>
					<Table<PersonData> columns={columns} data={data} />
				</div>
			</main>
		</div>
	);
}

export default App;
