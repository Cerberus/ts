export class ObjCache {
	ttl: number
	now: () => number
	data = {} as { [key: string]: any }

	constructor(ttl: number = 0) {
		this.ttl = ttl
		this.now = () => new Date().getTime()
	}

	get = (key: string) => {
		let val = null
		const obj = this.data[key]
		if (obj) {
			val = obj.val
			if (this.now() >= obj.expires) {
				val = null
				delete this.data[key]
			}
		}
		return val
	}

	del = (key: string) => {
		const oldval = this.get(key)
		delete this.data[key]
		return oldval
	}

	put = (key: string, val: any, ttl?: number) => {
		const extraTtl = ttl !== undefined ? ttl : this.ttl
		const oldval = this.del(key)
		if (!!val) this.data[key] = { val, expires: this.now() + extraTtl * 1000 }
		return oldval
	}
}
