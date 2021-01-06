import aws4 from 'aws4'
import https from 'https'

const item = aws4.sign(
	{
		host: 'storage.googleapis.com',
		path: '/static.starter-app.xyz/2sjl9yqrt2c/hmac.png',
		service: 's3',
		region: 'asia-southeast1',
		method: 'DELETE',
	},
	{
		accessKeyId: '',
		secretAccessKey: '',
	},
)

function request(opts: any) {
	https
		.request(opts, function(res) {
			res.pipe(process.stdout)
		})
		.end(opts.body || '')
}

const run = async () => {
	await request(item)
}
console.log('item', item)
run()
