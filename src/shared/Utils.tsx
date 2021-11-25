export function classNames(...classes: (string | null)[]): string {
	return classes.filter(Boolean).join(' ');
}
