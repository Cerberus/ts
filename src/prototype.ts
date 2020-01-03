// immu

Object.prototype.get = function() {
	const key: string = arguments[0]
	return (this as Obj)[key]
}

Object.prototype.getIn = function() {
	const keys: string[] = arguments[0]
	return keys.reduce((acc, key) => (acc ? acc[key] : undefined), this as Obj)
}

Object.prototype.merge = function() {
	const obj: Obj = arguments[0]
	return { ...(this as Obj), ...obj }
}

Object.prototype.isEmpty = function() {
	return Object.keys(this as Obj).length <= 0
}

const updateIn = function(
	keys: string[],
	updater: Function,
	item: Obj | Arr,
): Obj | Arr {
	const key = keys[0]
	let newValue
	if (keys.length <= 1) {
		newValue = updater(item.get(key))
	} else {
		newValue = updateIn(
			keys.slice(1),
			updater,
			item.get(key) || (Number.isInteger(+keys[1]) ? [] : {}),
		)
	}
	if (Array.isArray(item)) {
		return [
			...item.slice(0, +key),
			newValue,
			...item.slice(+key + 1, item.length),
		]
	}
	return { ...item, [key]: newValue }
}

Object.prototype.update = function() {
	const key: string = arguments[0]
	const updater: Function = arguments[1]
	return updateIn([key], updater, this as Obj) as Obj
}

Object.prototype.updateIn = function(keys: string[], updater: Function) {
	return updateIn(keys, updater, this as Obj) as Obj
}

Object.prototype.set = Object.prototype.update

Object.prototype.setIn = Object.prototype.updateIn

Array.prototype.get = Object.prototype.get

Array.prototype.getIn = Object.prototype.getIn

Array.prototype.isEmpty = function() {
	return (this as Arr).length <= 0
}

Array.prototype.update = function() {
	const key: string = arguments[0]
	const updater: Function = arguments[1]
	return updateIn([key], updater, this as Arr) as Arr
}

Array.prototype.updateIn = function(keys: string[], updater: Function) {
	return updateIn(keys, updater, this as Arr) as Arr
}

Array.prototype.set = Array.prototype.update

Array.prototype.setIn = Array.prototype.updateIn

Array.prototype.first = function() {
	return (this as Arr)[0]
}

Array.prototype.size = Array.prototype.length

type Obj = { [key: string]: any }
type Arr = Array<any>
