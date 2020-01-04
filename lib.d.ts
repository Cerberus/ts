declare function bind<T, U extends any[], V>(
	f: (x: T, ...args: U) => V,
	x: T,
): (...args: U) => V

type AccessPath = string | number

interface Object {
	get(key: AccessPath, defaultValue?: any): any
	getIn(keys: AccessPath[], defaultValue?: any): any
	merge(obj: Object): Object
	update(key: AccessPath, updater: (value: any) => any): Object
	updateIn(keys: AccessPath[], updater: (value: any) => any): Object
	set(key: AccessPath, updater: () => any): Object
	setIn(keys: AccessPath[], updater: () => any): Object
	isEmpty(): boolean
}

interface Array<T = any> {
	get(key: AccessPath, defaultValue?: any): any
	getIn(keys: AccessPath[], defaultValue?: any): any
	update(key: AccessPath, updater: (value: any) => any): Array<T>
	updateIn(keys: AccessPath[], updater: (value: any) => any): Array<T>
	set(key: AccessPath, updater: () => any): Array<T>
	setIn(keys: AccessPath[], updater: () => any): Array<T>
	isEmpty(): boolean
	first(): T
	remove(index: number): T
	size: number
}
