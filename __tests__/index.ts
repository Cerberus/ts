describe.only('index', () => {
	xit('optional chaining', () => {
		type Obj = number[]
		const fn = (obj?: Obj) => {
			return obj?.[0]
		}
		fn() /*?*/
		fn([1]) /*?*/
	})
	it('try', () => {})
})
