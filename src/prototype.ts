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

Object.prototype.update = function() {
	const key: string = arguments[0]
	const updater: Function = arguments[1]
	return { ...(this as Obj), [key]: updater(this.get(key)) }
}

const updateIn = function(keys: string[], updater: Function, obj: Obj): Obj {
	const key = keys[0]
	if (keys.length <= 1) {
		return { ...obj, [key]: updater(obj.get(key)) }
	}
	return { ...obj, [key]: updateIn(keys.slice(1), updater, obj[key] || {}) }
}

Object.prototype.updateIn = function(keys: string[], updater: Function) {
	return updateIn(keys, updater, this as Obj)
}

Object.prototype.set = Object.prototype.update

Object.prototype.setIn = Object.prototype.updateIn

type Obj = { [key: string]: any }
