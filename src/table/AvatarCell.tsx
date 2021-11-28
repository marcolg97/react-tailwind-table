import { Row } from 'react-table';
import { ColumnType } from './Columns';

/**
 * This is the avatar / image component
 */
export function AvatarCell<T extends Record<string, unknown>>({
	value,
	column,
	row,
}: {
	value: string;
	column: any; //ColumnType<T>;
	row: any; //Row<T>;
}) {
	return (
		<div className='flex items-center'>
			<div className='flex-shrink-0 h-10 w-10'>
				<img className='h-10 w-10 rounded-full' src={row.original[column.imgAccessor]} alt='' />
			</div>
			<div className='ml-4'>
				<div className='text-sm font-medium text-gray-900'>{value}</div>
				<div className='text-sm text-gray-500'>{row.original[column.emailAccessor]}</div>
			</div>
		</div>
	);
}
