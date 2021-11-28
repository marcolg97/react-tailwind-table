import { Column } from 'react-table';
import { PersonData } from '../api/api';
import { AvatarCell } from './AvatarCell';
import { SelectColumnFilter } from './filters/SelectColumnFilter';
import { StatusPill } from './StatusPill';

/**
 * This will define the stucture of our tables (i.e. the columns for our data table)
 * - Header is the display name of the column.
 * - Accessor is the corrisponding name field inside the data (react table will identity what data goes under which column).
 */
//TODO: Check if this is corect. Column doesn't have imgAccessor and emailAccessor
export type ColumnType<T extends Record<string, unknown>> = Column<T> & {
	imgAccessor?: string;
	emailAccessor?: string;
};

export const columnsStructure: ColumnType<PersonData>[] = [
	{
		Header: 'Name',
		accessor: 'name',
		Cell: AvatarCell,
		//TODO: In this way we can't filter for email inside the table
		imgAccessor: 'imgUrl',
		emailAccessor: 'email',
	},
	{
		Header: 'Title',
		accessor: 'title',
	},
	{
		Header: 'Status',
		accessor: 'status',
		Cell: StatusPill,
	},
	{
		Header: 'Age',
		accessor: 'age',
	},
	{
		Header: 'Role',
		accessor: 'role',
		Filter: SelectColumnFilter,
		filter: 'includes',
	},
];
