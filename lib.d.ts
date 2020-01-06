declare function bind<T, U extends any[], V>(
	f: (x: T, ...args: U) => V,
	x: T,
): (...args: U) => V

type AccessPath = string | number

interface Object {
	getIn(keys: AccessPath[], defaultValue?: any): any
	merge(obj: Object): Object
	update(key: AccessPath, updater: (value: any) => any): Object
	updateIn(keys: AccessPath[], updater: (value: any) => any): Object
	setIn(keys: AccessPath[], value: any): Object
	delete(key: AccessPath): Object
	deleteIn(keys: AccessPath[]): Object
	isEmpty(): boolean
}

interface Array<T = any> {
	getIn(keys: AccessPath[], defaultValue?: any): any
	update(key: AccessPath, updater: (value: any) => any): Array<T>
	updateIn(keys: AccessPath[], updater: (value: any) => any): Array<T>
	setIn(keys: AccessPath[], value: any): Array<T>
	isEmpty(): boolean
	first(): T
	insert(index: number, value: any): T
	remove(index: number): T
	delete(index: number): T
	size: number
}
