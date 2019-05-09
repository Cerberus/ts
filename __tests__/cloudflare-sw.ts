const getIds = (body: string) => {
	const reg = /\"id\":"(\w+)"/g
	return (body.match(reg) || []).map(idStr => idStr.slice(6, -1))
}

describe('cloudflare-sw', () => {
	it('test', () => {
		const data = `{"data":{"feed":[{"id":"cjupbi43m00ap07761rdda6aq","title":"title2","content":"new"},{"id":"cjuzawb0n01ih07767foga2li","title":"title2","content":"new"}]}}`
		getIds(data) // ?
	})
})
