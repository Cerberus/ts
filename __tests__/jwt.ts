import * as jwt from 'jsonwebtoken'

describe.only('jwt', () => {
	it('simple', () => {
		const SECRET = 'secret'
		const id = 'test'
		const token = jwt.sign({ id }, SECRET)
		token //
		const { id: resultId } = jwt.verify(token, SECRET) as any
		expect(resultId).toEqual(id)
	})
})
