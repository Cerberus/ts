const f2 = () => {
	console.trace('test')
	throw Error('No.' + 1)
}

const f1 = (num: number) => {
	const g = () => f2()
	return g
}

describe('stacktrace', () => {
	it.skip('index', () => {
		f1(1)()
	})
})
