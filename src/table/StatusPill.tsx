import { classNames } from '../shared/Utils';

export function StatusPill({ value }: { value: string }): JSX.Element {
	const status = value ? value.toLowerCase() : 'unknown';

	return (
		<span
			className={classNames(
				'px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm',
				status.startsWith('active') ? 'bg-green-100 text-green-800' : null,
				status.startsWith('inactive') ? 'bg-yellow-100 text-yellow-800' : null,
				status.startsWith('offline') ? 'bg-red-100 text-red-800' : null
			)}>
			{status}
		</span>
	);
}
