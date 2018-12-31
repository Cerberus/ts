const w = {
	FB: true,
}

let ready!: Function

const Facebook = new Promise(res => (ready = res))

const track = async (params: Object) =>
	Facebook.then(FB => {
		FB && params // ?
	})

describe('async-fetching', () => {
	it('async queue', async () => {
		track({})
		ready(w.FB)
	})
})
