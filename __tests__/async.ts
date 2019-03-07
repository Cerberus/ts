const bar = async () => Promise.resolve(1)

describe('async', () => {
	it('simple', async () => {
		expect(await bar()).toEqual(1)
	})
})
