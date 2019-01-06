const f = async () => Promise.resolve(1)

describe.only('async', () => {
	it('simple', async () => {
		expect(await f()).toEqual(1)
	})
})
