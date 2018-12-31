const sum = (x: number, y: number) => x + y

const addTwo = (x: number) => sum(x, 2)

describe('curry', () => {
	it('basic', () => {
		addTwo(2)
	})
})
