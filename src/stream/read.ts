import * as fs from 'fs'

const fileStream = fs.createReadStream(__dirname + '/file.txt', 'utf8')

fileStream.on('data', chunk => {
	console.log('receive new chunk 3')
	console.log('chunk', chunk)
})

console.log('end of file')