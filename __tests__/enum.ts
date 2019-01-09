import { Test } from 'enum'

const fun = (value: Test) => {
	if (value === 0) {
	}
}

describe.only('general', () => {
	it('simple', async () => {
		fun(Test.A)
		Test
		Test.A // ?
		Test.B // ?
	})
})

export default Test
