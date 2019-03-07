export enum Test {
	A = 'A',
	B = 'B',
}

const fun = (value: Test) => {
	if (value === 'A') {
	}
}

describe('general', () => {
	it('simple', async () => {
		fun(Test.A)
		Test
		Test.A // ?
		Test.B // ?
	})
})

export default Test
