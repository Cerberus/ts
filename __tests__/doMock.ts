describe('doMock', () => {
	it.only('test', async () => {
		// mocking part
		const lowLevelFetch = jest.fn()
		jest.doMock('track', () => ({
			lowLevelFetch,
		}))

		// testing part
		const { call } = await import('my-util')
		call()
		expect(lowLevelFetch).toBeCalled()
	})
})
