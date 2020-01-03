import { fromJS, Map, List } from 'immutable'

describe('immutable', () => {
	it('mergeIt', () => {
		const mergeIt = (evouchers: Obj[]) => {
			return Object.entries(
				evouchers.reduce((acc, evoucher) => {
					// @ts-ignore FIXME: use optional chaining
					const id: number = evoucher.business
						? evoucher.business.id
						: evoucher.chian.id
					const list = acc[id] || []
					const newList = list.concat(evoucher)
					acc[id] = newList
					return acc
				}, {} as { [key: number]: Obj[] }),
			).map(([key, value]) => value)
		}

		mergeIt([{ business: { id: 1 } }, { business: { id: 1 } }]) /*?*/
	})
	it('mergeWith', () => {
		const map = fromJS({ a: { b: 1 } })
		map.mergeWith((value: any, newValue: any, key: string) => {
			value /*?*/
			newValue /*?*/
			// return value
		}, fromJS({ a: { b: 1 } })) /*?*/
	})
})
