import * as Dataloader from 'dataloader'

describe('dataloader', () => {
	it('simple await', async () => {
		const f = async (nums: number) => {
			await new Promise(res => setTimeout(res))
			return nums
		}

		const g = (nums: number[]) => {
			return Promise.all(nums.map(f))
		}

		const fLoader = new Dataloader(g)

		await fLoader.loadMany([1, 3]) // ?
		await fLoader.load(1) // ?
		await fLoader.load(2) // ?
	})

	it('batching', async () => {
		const api = async (ids: number[]) => {
			return ids.map(async id => ({ id }))
		}

		const fLoader = new Dataloader(api)
		await Promise.all([
			fLoader.loadMany([1, 2]),
			fLoader.loadMany([1, 3]),
		]) /*?*/
	})
})
