const genTxt = () => {
	return [...new Array(100)].map(() => Math.random().toString(36)).join()
}
describe('simple', () => {
	it('index', () => {
		genTxt() /*?*/
	})
})
