const getIn = {
	writable: true,
	configurable: true,
	enumerable: false,
	value(keys: string[], defaultValue: any) {
		const value = keys.reduce(
			// @ts-ignore
			(acc, key) => (acc ? acc[key] : undefined),
			this as Obj,
		)
		return value !== undefined ? value : defaultValue
	},
}
Object.defineProperty(Object.prototype, 'getIn', getIn)

Object.defineProperty(Object.prototype, 'merge', {
	writable: true,
	configurable: true,
	enumerable: false,
	value(obj: Obj) {
		return Object.assign({}, this as Obj, obj)
	},
})

Object.defineProperty(Object.prototype, 'isEmpty', {
	writable: true,
	configurable: true,
	enumerable: false,
	value() {
		return Object.keys(this as Obj).length <= 0
	},
})

const updateIn = function(
	keys: string[],
	updater: Function,
	item: Obj | Arr,
): Obj | Arr {
	const key = keys[0]
	let newValue
	if (keys.length <= 1) {
		// @ts-ignore
		newValue = updater(item.getIn([key]))
	} else {
		// @ts-ignore
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

Object.defineProperty(Object.prototype, 'updateOn', {
	writable: true,
	configurable: true,
	enumerable: false,
	value(key: string, updater: Function) {
		return updateIn([key], updater, this as Obj) as Obj
	},
})

Object.defineProperty(Object.prototype, 'updateIn', {
	writable: true,
	configurable: true,
	enumerable: false,
	value(keys: string[], updater: Function) {
		return updateIn(keys, updater, this as Obj) as Obj
	},
})

Object.defineProperty(Object.prototype, 'setIn', {
	writable: true,
	configurable: true,
	enumerable: false,
	value(keys: string[], value: any) {
		return updateIn(keys, () => value, this as Obj) as Obj
	},
})

Object.defineProperty(Object.prototype, 'delete', {
	writable: true,
	configurable: true,
	enumerable: false,
	value(key: string, value: any) {
		const newObj = Object.assign({}, this as Obj)
		// @ts-ignore
		delete newObj[key]
		return newObj
	},
})

Object.defineProperty(Object.prototype, 'deleteIn', {
	writable: true,
	configurable: true,
	enumerable: false,
	value(keys: string[], value: any) {
		const obj = this as Obj
		if (keys.length <= 1) {
			// @ts-ignore
			return obj.delete(keys[0])
		}
		const lastIndex = keys.length - 1
		const parentKeys = keys.slice(0, lastIndex)
		const childKey = keys[lastIndex]

		// @ts-ignore
		const parentValue = obj.getIn(parentKeys)
		let newParentValue: Array<any> | Object
		if (Array.isArray(parentValue)) {
			// @ts-ignore
			newParentValue = parentValue.remove(+childKey)
		} else {
			// @ts-ignore
			newParentValue = Object.assign({}, obj.getIn(parentKeys))
			// @ts-ignore possible obj | array
			delete newParentValue[childKey]
		}
		return updateIn(parentKeys, () => newParentValue, this as Obj) as Obj
	},
})

Object.defineProperty(Object.prototype, 'includes', {
	writable: true,
	configurable: true,
	enumerable: false,
	value(expectedValue: number) {
		return !!Object.entries(this as Obj).find(
			([_key, value]) => value === expectedValue,
		)
	},
})

Object.defineProperty(Array.prototype, 'getIn', getIn)

// @ts-ignore
Array.prototype.isEmpty = function() {
	return (this as Arr).length <= 0
}

// @ts-ignore
Array.prototype.updateOn = function() {
	const key: string = arguments[0]
	const updater: Function = arguments[1]
	return updateIn([key], updater, this as Arr) as Arr
}

// @ts-ignore
Array.prototype.updateIn = function(keys: string[], updater: Function) {
	return updateIn(keys, updater, this as Arr) as Arr
}

// @ts-ignore
Array.prototype.setIn = function() {
	const keys: string[] = arguments[0]
	const value: any = arguments[1]
	return updateIn(keys, () => value, this as Arr) as Arr
}

// @ts-ignore
Array.prototype.first = function() {
	return (this as Arr)[0]
}

// @ts-ignore
Array.prototype.insert = function(index: number, value: any) {
	const arr = this as Arr
	return arr
		.slice(0, index)
		.concat(value)
		.concat(arr.slice(index, arr.length))
}

// @ts-ignore
Array.prototype.remove = function(index: number) {
	const arr = this as Arr
	return arr.slice(0, index).concat(arr.slice(index + 1, arr.length))
}

// @ts-ignore
Array.prototype.delete = Array.prototype.remove

Object.defineProperty(Array.prototype, 'size', {
	get() {
		return this.length
	},
	set() {
		return 0
	},
})

type Obj = Object
type Arr = Array<any>
