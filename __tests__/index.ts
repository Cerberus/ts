type Hrtime = [number, number]
const hrtime = (hrtime?: Hrtime): Hrtime => (!hrtime ? [0, 0] : [10, 0])

function durationHrTimeToNanos(hrtime: [number, number]) {
	return hrtime[0] * 1e9 + hrtime[1]
}

describe('index', () => {
	xit('optional chaining', () => {
		type Obj = number[]
		const fn = (obj?: Obj) => {
			return obj?.[0]
		}
		fn() /*?*/
		fn([1]) /*?*/
	})
	it('try', () => {
		process.hrtime() /*?*/
		const start = hrtime() /*?*/
		durationHrTimeToNanos(hrtime()) /*?*/
		durationHrTimeToNanos(hrtime(start)) /*?*/
	})
})
