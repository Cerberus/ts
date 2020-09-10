import { add, devide } from '@cerberus/script';

describe('script', () => {
	it.only('simple', () => {
		add(1, 2); /*?*/
		devide(1, 2);
	});
});
