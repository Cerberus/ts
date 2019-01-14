type Keys = 1 | 2

const fun = (keys: Keys) => {}

describe('types', () => {
	it('sample', () => {
		fun(1)
		fun(2)
	})
})
