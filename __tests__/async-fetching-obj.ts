let isReady!: Function

interface BranchSdk {
	init: Function
}

const branch = new Promise<BranchSdk>(res => (isReady = res))

const branchSdk = new Proxy({} as BranchSdk, {
	get: (obj, key: 'init') => (...args: unknown[]) =>
		branch.then(BRANCH => {
			BRANCH[key](...args) // ?
		}),
})

describe('async-fetching', () => {
	it('async queue', async () => {
		branchSdk.init('test')
		isReady({ init: (str: string) => str })
	})
})
