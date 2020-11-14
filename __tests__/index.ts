const b = function(this: any, a: number) {
	this?.m /*?*/
	a
}

const a = function(this: any) {
	const bindB = b.bind(this)
	bindB(1)
}

const m = { fetch: () => {} }

describe('simple', () => {
	it.only('index', () => {
		const fn = a.bind({ m: m })
		fn()
	})
})
