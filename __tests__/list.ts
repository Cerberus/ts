describe('simple', () => {
	it('index', () => {
		// const arr = '0'.repeat(512 * 50000)
		const item = JSON.stringify({
			name: 'test',
			metadata: {
				meta:
					'valuevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevalue',
			},
		})

		const body = `
{
  "result": [
    ${(item + ',').repeat(100 - 1)}
    {
      "name": "test",
      "metadata": {
        "meta": "value"
      }
    }
  ],
  "success": true,
  "errors": [],
  "messages": [],
  "result_info": {
    "count": 11,
    "cursor": "AAAAAG44ByiBELZvCP9Q3MwSgWLAQ1uvrTAS9s-ksB-27vQagpTc5MadIFBYC55VoRbMBW_A3TF6aHunH4Y59Q-XdDcIoRepAkpw_uJxHdZOuIaV8dGnLLidlqO3RtWHYrimtIO7HLgkpx_GOAfkI6pdQzq_B33wptoVPvGyfeRxbwxD-jkOCWkwGQZxH-qYdW6goTGZkLD6gqLSwExDQJ-64EH_HOAatK5LHYH-NlYqIDQ1gUyNQ4H3bDo_uy05zbYeV73_NCTPsPubeDJl4KymmO7W2DJMJVizb7jN7A"
  }
}
`
		JSON.parse(body) /*?.*/
		// body.indexOf('1') /*?.*/

		// const run = () => {
		// 	for (let i = 0; i < 5000; i++) {
		// 		JSON.parse(item)
		// 	}
		// }
		// run() /*?.*/
	})
})
