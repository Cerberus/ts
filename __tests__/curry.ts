const sum = (x: number, y: number) => x + y

const addTwo = (x: number) => sum(x, 2)

const plusTwo = bind(sum, 2)

describe('curry', () => {
	it('basic', () => {
		addTwo(2)
		plusTwo(2)
	})
})
