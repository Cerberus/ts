import { TEST } from 'test'

const f = <T>(value: T): T => value

describe('general', () => {
	it('simple', async () => {
		const test = f(1)
		TEST // ?
		test // ?
	})
})
