import aws4 from 'aws4'

describe('aws4', () => {
	it.skip('index', () => {
		const item = aws4.sign(
			{
				host: 'storage.googleapis.com',
				path: '/static.starter-app.xyz/hmac.png',
				service: 's3',
				region: 'asia-southeast1',
				method: 'DELETE',
			},
			{
				accessKeyId: '',
				secretAccessKey: '',
			},
		)
		item
	})
})
