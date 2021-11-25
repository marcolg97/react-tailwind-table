import { Column } from 'react-table';
import { PersonData } from '../api/api';

import { AvatarCell, SelectColumnFilter, StatusPill } from '../Table';

/**
 * This will define the stucture of our tables (i.e. the columns for our data table)
 * - Header is the display name of the column.
 * - Accessor is the corrisponding name field inside the data (react table will identity what data goes under which column).
 */

//FIXME: I found two alternatives :Column<PersonData>[] or :ColumnProps[]

export const columnsStructure: Column<PersonData>[] = [
	{
		Header: 'Name',
		accessor: 'name',
		Cell: AvatarCell,
		//@ts-ignore
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
