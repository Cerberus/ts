// immu

Object.prototype.getIn = function() {
	const path: string[] = arguments[0]
	return path.reduce(
		(acc, key) => (acc ? acc[key] : undefined),
		this as { [key: string]: any },
	)
}
