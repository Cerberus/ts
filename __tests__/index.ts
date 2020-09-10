const latLongRex = /([0-9]+)\.([0-9]+)	([0-9]+)\.([0-9]+)/g;

const getLatLong = (text: string): [number, number][] => {
	const result = text.match(latLongRex);

	return (result || []).map(
		latLongStr =>
			latLongStr.split('\t').map(latLong => +latLong) as [number, number],
	);
};

describe('simple', () => {
	it.only('index', () => {
		getLatLong(
			`176067	Ok	ราดหน้า ผัดไทย ผัดซีอิ้ว	K-Night	ในเมือง	เมืองกำแพงเพชร	กำแพงเพชร	16.472997	99.510149	Rice Dish	https://www.wongnai.com/r/176067Ok	ชมพู่	099-999-9999	ปิดกิจการ	ไปแล้วไม่พบ ถามคนพื้นแล้วร้านปิดไปนานแล้ว	8/9/2020
			27794	oj	เซี้ยงบะหมี่		นครชุม	เมืองกำแพงเพชร	กำแพงเพชร	16.487837	99.486851	Noodles	https://www.wongnai.com/r/27794oj	ชมพู่										`,
		); /*?*/
	});
});
