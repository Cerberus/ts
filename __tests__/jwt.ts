import * as jwt from 'jsonwebtoken'

describe('jwt', () => {
	it('simple', () => {
		const id = 'test'
		const SECRET = 'secret'
		const token = jwt.sign({ id }, SECRET)
		const [header, payload, signature] = token.split('.')
		header
		payload
		signature
		const { id: resultId } = jwt.verify(token, SECRET) as any /*?.*/
		expect(resultId).toEqual(id)
	})
})
