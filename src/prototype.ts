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

type Obj = { [key: string]: any }
