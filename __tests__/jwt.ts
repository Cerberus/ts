import * as jwt from 'jsonwebtoken'

describe('jwt', () => {
	it('simple', () => {
		const SECRET = 'secret'
		const id = 'test'
		const token = jwt.sign({ id }, SECRET)
		const { id: resultId } = jwt.verify(token, SECRET) as any
		expect(resultId).toEqual(id)
	})
})
