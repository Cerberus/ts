const w = {
	FB: false,
}

let ready!: Function

const Facebook = new Promise(res => (ready = res))
const Tracker = (cb: ((FB: boolean) => void)) => Facebook.then(cb)

describe.only('async', () => {
	it('async queue', async () => {
		Tracker(FB => {
			FB
		})
		ready(w.FB)
	})
})
