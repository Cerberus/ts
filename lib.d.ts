declare function bind<T, U extends any[], V>(
	f: (x: T, ...args: U) => V,
	x: T,
): (...args: U) => V

interface Object {
	get(key: string): any
	getIn(keys: string[]): any
}
