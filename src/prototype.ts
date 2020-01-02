// immu

Object.prototype.get = function() {
	const key: string = arguments[0]
	return (this as Obj)[key]
}

Object.prototype.getIn = function() {
	const keys: string[] = arguments[0]
	return keys.reduce((acc, key) => (acc ? acc[key] : undefined), this as Obj)
}

type Obj = { [key: string]: any }
