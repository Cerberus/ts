const EMPTY_OBJECT = {}
// tslint:disable-next-line
export const Map = <T>(obj?: T) => obj || EMPTY_OBJECT

const EMPTY_LIST: any = []
// tslint:disable-next-line
export const List = <T>(list?: T[]): T[] => list || EMPTY_LIST

export const fromJS = <T>(item: T) => item

// export class Record<T> {
// 	initialObj: T
// 	name?: string
// 	constructor(initialObj: T, name?: string) {
// 		this.initialObj = initialObj
// 		this.name = name
// 	}
// }

// export const record = <T>(initialObj: T, name?: string) => (obj: Partial<T>) =>
// 	new Record(initialObj, name)
// new solution proxy object instead new Proxy(obj, {...})
