const w = {
	FB: true,
}

let ready!: Function

const facebook = new Promise(res => (ready = res))

const track = async (params: Object) =>
	facebook.then(FB => {
		FB && params // ?
	})

describe('async-fetching', () => {
	it('async queue', async () => {
		track({})
		ready(w.FB)
	})
})
