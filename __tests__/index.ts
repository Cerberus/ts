const f = (test: number) => test + 1

describe('general', () => {
	it('simple', () => {
		expect(true).toBe(true)
	})
	it('test', () => {
		expect(f(1)).toBe(2)
	})
})
