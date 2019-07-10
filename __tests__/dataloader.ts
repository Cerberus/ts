import * as Dataloader from 'dataloader'

describe.only('dataloader', () => {
	it('simple await', async () => {
		const f = async (nums: number) => {
			console.log(nums)
			await new Promise(res => setTimeout(res))
			return nums
		}

		const g = (nums: number[]) => {
			console.log(nums)
			return Promise.all(nums.map(f))
		}

		const fLoader = new Dataloader(g)

		await fLoader.loadMany([1, 3]) // ?
		await fLoader.load(1) // ?
		await fLoader.load(2) // ?
	})

	it('batching', async () => {
		const api = async (ids: number[]) => {
			console.log(ids)
			return ids.map(id => ({ id }))
		}

		const g = (nums: number[]) => {
			console.log(nums)
			return api(nums)
		}

		const fLoader = new Dataloader(g)
		await Promise.all([
			fLoader.loadMany([1, 2]),
			fLoader.loadMany([1, 3]),
		]) /*?*/
	})
})
