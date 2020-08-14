import cluster = require('cluster')
import http = require('http')
import os = require('os')

if (cluster.isMaster) {
	console.log(`Master ${process.pid}`)

	os.cpus().forEach(() => {
		cluster.fork()
	})

	cluster.on('exit', worker => {
		console.log(`Exit ${worker.process.pid}`)
	})
} else {
	http
		.createServer((req, res) => {
			console.log('process.pid', process.pid)
			res.writeHead(200)
			res.end(`hello ${process.pid}`)
		})
		.listen(8080)
	console.log(`Worker ${process.pid}`)
}
