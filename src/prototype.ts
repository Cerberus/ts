Object.prototype.getIn = function() {
	const keys: string[] = arguments[0]
	const defaultValue: any = arguments[1]
	const value = keys.reduce(
		(acc, key) => (acc ? acc[key] : undefined),
		this as Obj,
	)
	return value !== undefined ? value : defaultValue
}

Object.prototype.merge = function() {
	const obj: Obj = arguments[0]
	return Object.assign({}, this as Obj, obj)
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
		newValue = updater(item.getIn([key]))
	} else {
		const childValue = item.getIn([key])
		newValue = updateIn(
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

Object.prototype.update = function() {
	const key: string = arguments[0]
	const updater: Function = arguments[1]
	return updateIn([key], updater, this as Obj) as Obj
}

Object.prototype.updateIn = function(keys: string[], updater: Function) {
	return updateIn(keys, updater, this as Obj) as Obj
}

Object.prototype.setIn = function() {
	const keys: string[] = arguments[0]
	const value: any = arguments[1]
	return updateIn(keys, () => value, this as Obj) as Obj
}

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

Array.prototype.setIn = function() {
	const keys: string[] = arguments[0]
	const value: any = arguments[1]
	return updateIn(keys, () => value, this as Arr) as Arr
}

Array.prototype.first = function() {
	return (this as Arr)[0]
}

Array.prototype.remove = function(index: number) {
	const arr = this as Arr
	return arr.slice(0, index).concat(arr.slice(index + 1, arr.length))
}

Object.defineProperty(Array.prototype, 'size', {
	get() {
		return this.length
	},
	set() {
		return 0
	},
})

type Obj = { [key: string]: any }
type Arr = Array<any>
