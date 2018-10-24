import { leftpad } from '.';

function fullZero(str: string) {
	return leftpad(str, 2, '0');
}

export function time(value: number): string {
	const date = new Date(value);

	const hours = String(date.getHours());
	const minutes = String(date.getMinutes());
	return `${fullZero(hours)}:${fullZero(minutes)}`;
}

export default {
	install(Vue: any) {
		Vue.filter('time', time);
	}
}