// @ts-nocheck
import { solve, Point } from 'tsc';

describe('tsc', () => {
	it.only('simple', () => {
		const points = [
			[1, 1],
			[3, 3],
			[4, 4],
			[2, 2],
		].map(([y, x], index) => ({ x, y, i: index + 1 }));

		// const [min, max] = rawPoints.reduce(
		// 	([min, max], point) => {
		// 		return [
		// 			[Math.min(min[0], point.x), Math.min(min[1], point.y)],
		// 			[Math.max(max[0], point.x), Math.max(max[1], point.y)],
		// 		];
		// 	},
		// 	[
		// 		[Infinity, Infinity],
		// 		[0, 0],
		// 	],
		// );

		// const diffX = max[0] - min[0];
		// const diffY = max[1] - min[1];

		// const points = rawPoints.map(point => ({
		// 	i: point.i,
		// 	x: ((point.x - min[0]) / diffX) * 100,
		// 	y: 100 - ((point.y - min[1]) / diffY) * 100,
		// }));

		const newPoints = [...points];

		const distance = (p, q) => {
			const dx = p.x - q.x,
				dy = p.y - q.y;
			return Math.sqrt(dx * dx + dy * dy);
		};

		newPoints.forEach((_, index) => {
			if (index === 0) {
				return;
			}

			for (let i = index + 1; i < newPoints.length; i++) {
				if (
					distance(newPoints[index - 1], newPoints[index]) >
					distance(newPoints[index - 1], newPoints[i])
				) {
					const temp = newPoints[index];
					newPoints[index] = newPoints[i];
					newPoints[i] = temp;
				}
			}
		});

		const orders = newPoints.map(newPoint =>
			points.findIndex(point => {
				return point.i === newPoint.i;
			}),
		);
		orders; /*?*/
		// console.log(points.map((point, index) => points[orders[index]])); /*?*/

		// const [min, max] = points.reduce(
		// 	([min, max], point) => {
		// 		return [
		// 			[Math.min(min[0], point.x), Math.min(min[1], point.y)],
		// 			[Math.max(max[0], point.x), Math.max(max[1], point.y)],
		// 		];
		// 	},
		// 	[
		// 		[Infinity, Infinity],
		// 		[0, 0],
		// 	],
		// );

		// const diffX = max[0] - min[0];
		// const diffY = max[1] - min[1];

		// const uiPoints = points.map(point => ({
		// 	x: ((point.x - min[0]) / diffX) * 600,
		// 	y: 600 - ((point.y - min[1]) / diffY) * 600,
		// }));

		// // const points = [
		// // 	[1, 1],
		// // 	[2, 2],
		// // 	[2, 1],
		// // ].map(([x, y]) => new Point(x, y));
		// const solution = solve(uiPoints, 0.1);

		// console.log('solution', solution);
		//
	});
});
