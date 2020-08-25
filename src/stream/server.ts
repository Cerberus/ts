import * as fs from 'fs'
import * as http from 'http'

const server = http.createServer()

server.on('request', (req, res) => {
	const fileStream = fs.createReadStream(__dirname + '/file.txt')
	fileStream.pipe(res)
})

server.listen(8000)
