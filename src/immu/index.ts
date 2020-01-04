const EMPTY_OBJECT = {}
// tslint:disable-next-line
export const Map = <T>(obj?: T) => obj || EMPTY_OBJECT

const EMPTY_LIST: any = []
// tslint:disable-next-line
export const List = <T>(list?: T[]): T[] => {
	const value = list || EMPTY_LIST
	// value.size = value.length
	return value
}

export const fromJS = <T>(item: T) => item

// tslint:disable-next-line
export const Record = <T>(initialObj: T) => (obj: Partial<T>) =>
	Object.assign({}, initialObj, obj)

// export class Record<T> {
// 	initialObj: T
// 	name?: string
// 	constructor(initialObj: T, name?: string) {
// 		this.initialObj = initialObj
// 		this.name = name
// 	}
// }

// // tslint:disable-next-line
// export const Record = <T>(initialObj: T) => (obj: Partial<T>) => {
// 	const handler = {
// 		get(obj: Object, key: string) {
// 			key	 /*?*/
// 			initialObj[key] /*?*/
// 			obj[key] /*?*/
// 			// @ts-ignore
// 			return obj[key] || initialObj[key]
// 		},
// 	}
// 	return new Proxy(obj, handler as any)
// }
