import '../../src/prototype'

// tslint:disable-next-line
export const Map = <Z = any, Y = any, T = any>(obj?: T) => obj || {}

// tslint:disable-next-line
export const List = <T = any>(list?: T[]): T[] => {
	const value = list || []
	// value.size = value.length
	return value
}

export const fromJS = <T>(item: T) => item

// tslint:disable-next-line
export const Record = <T>(initialObj: T) => (obj: Partial<T>) =>
	Object.assign({}, initialObj, obj)
