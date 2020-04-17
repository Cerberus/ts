import { Duplex } from 'stream'

const inoutStream = new Duplex({
	write(chunk, encoding, callback) {
		console.log(chunk.toString())
		callback()
	},

	read(size) {
		// @ts-ignore
		this.push(String.fromCharCode(this.currentCharCode++))
		// @ts-ignore
		if (this.currentCharCode > 90) {
			this.push(null)
		}
	},
})

// @ts-ignore
inoutStream.currentCharCode = 65

process.stdin.pipe(inoutStream).pipe(process.stdout)
