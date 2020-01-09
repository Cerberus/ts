import '../../src/prototype'

const FREEZE_OBJ = {}
Object.freeze(FREEZE_OBJ)

// tslint:disable-next-line
export const Map = <Z = any, Y = any, T = any>(obj?: T) => obj || FREEZE_OBJ

const FREEZE_ARRAY: any[] = []
Object.freeze(FREEZE_ARRAY)

// tslint:disable-next-line
export const List = <T = any>(list?: T[]): T[] => list || FREEZE_ARRAY

export const fromJS = <T>(item: T) => item

// tslint:disable-next-line
export const Record = <T>(initialObj: T) => (obj: Partial<T>) =>
	Object.assign({}, initialObj, obj)

export default {
	Map,
	List,
	fromJS,
	Record,
}
