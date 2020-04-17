export const getIn = (obj: Obj, keys: Path[], defaultValue?: any) => {
	const value = keys.reduce((acc, key) => (acc ? acc[key] : undefined), obj)
	return value !== undefined ? value : defaultValue
}

export const merge = (obj: Obj, obj2: Obj) => {
	return Object.assign({}, obj, obj2)
}

export const isEmpty = (item: Obj | Arr) => {
	if (Array.isArray(item)) {
		return item.length <= 0
	}
	return Object.keys(item).length <= 0
}

const coreUpdateIn = (
	keys: Path[],
	updater: (value: any) => any,
	item: Obj | Arr,
): Obj | Arr => {
	const key = keys[0]
	let newValue
	if (keys.length <= 1) {
		newValue = updater(getIn(item, [key]))
	} else {
		const childValue = getIn(item, [key])
		newValue = coreUpdateIn(
			keys.slice(1),
			updater,
			childValue !== undefined
				? childValue
				: Number.isInteger(+keys[1])
				? []
				: {},
		)
	}
	if (Array.isArray(item)) {
		return item
			.slice(0, +key)
			.concat(newValue, item.slice(+key + 1, item.length))
	}
	return Object.assign({}, item, { [key]: newValue })
}

export const updateOn = (
	item: Obj | Arr,
	key: Path,
	updater: (value: any) => any,
) => {
	return coreUpdateIn([key], updater, item)
}

export const updateIn = (
	item: Obj | Arr,
	keys: Path[],
	updater: (value: any) => any,
) => {
	return coreUpdateIn(keys, updater, item)
}

export const setIn = (itemm: Obj | Arr, keys: Path[], value: any) => {
	return coreUpdateIn(keys, () => value, itemm) as Obj
}

export const deleteKey = (obj: Obj, key: Path) => {
	const newObj = Object.assign({}, obj)
	delete newObj[key]
	return newObj
}

export const deleteIn = (obj: Obj, keys: Path[]) => {
	if (keys.length <= 1) {
		return deleteKey(obj, keys[0])
	}
	const lastIndex = keys.length - 1
	const parentKeys = keys.slice(0, lastIndex)
	const childKey = keys[lastIndex]

	const parentValue = getIn(obj, parentKeys)
	let newParentValue: Array<any> | Object
	if (Array.isArray(parentValue)) {
		newParentValue = remove(parentValue, +childKey)
	} else {
		newParentValue = Object.assign({}, getIn(obj, parentKeys))
		// @ts-ignore possible obj | array
		delete newParentValue[childKey]
	}
	return coreUpdateIn(parentKeys, () => newParentValue, obj) as Obj
}

export const includes = (obj: Obj, expectedValue: number) => {
	return !!Object.entries(obj).find(([key, value]) => value === expectedValue)
}

export const insert = (arr: Arr, index: number, value: any) => {
	return arr
		.slice(0, index)
		.concat(value)
		.concat(arr.slice(index, arr.length))
}

export const remove = (arr: Arr, index: number) => {
	return arr.slice(0, index).concat(arr.slice(index + 1, arr.length))
}

type Obj = { [key: string]: any }
type Arr = Array<any>
type Path = string | number
