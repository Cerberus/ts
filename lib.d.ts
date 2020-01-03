declare function bind<T, U extends any[], V>(
	f: (x: T, ...args: U) => V,
	x: T,
): (...args: U) => V

interface Object {
	get(key: string): any
	getIn(keys: string[]): any
	merge(obj: Object): Object
	update(key: string, updater: (value: any) => any): Object
	updateIn(keys: string[], updater: (value: any) => any): Object
	set(key: string, updater: () => any): Object
	setIn(keys: string[], updater: () => any): Object
	isEmpty(): boolean
}

interface Array<T = any> {
	get(key: string): any
	getIn(keys: string[]): any
	update(key: string, updater: (value: any) => any): Array<T>
	updateIn(keys: string[], updater: (value: any) => any): Array<T>
	set(key: string, updater: () => any): Array<T>
	setIn(keys: string[], updater: () => any): Array<T>
	isEmpty(): boolean
	size: number
}
