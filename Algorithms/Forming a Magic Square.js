function formingMagicSquare(s) {
	let cost;
	const allMagicSquars = [
		[
			[4, 3, 8],
			[9, 5, 1],
			[2, 7, 6],
		],
		[
			[4, 9, 2],
			[3, 5, 7],
			[8, 1, 6],
		],
		[
			[2, 9, 4],
			[7, 5, 3],
			[6, 1, 8],
		],
		[
			[2, 7, 6],
			[9, 5, 1],
			[4, 3, 8],
		],
		[
			[6, 1, 8],
			[7, 5, 3],
			[2, 9, 4],
		],
		[
			[6, 7, 2],
			[1, 5, 9],
			[8, 3, 4],
		],
		[
			[8, 3, 4],
			[1, 5, 9],
			[6, 7, 2],
		],
		[
			[8, 1, 6],
			[3, 5, 7],
			[4, 9, 2],
		],
	];

	for (let mSquare of allMagicSquars) {
		let tempCost = 0;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				tempCost += Math.abs(mSquare[i][j] - s[i][j]);
			}
		}
		if (tempCost == 0) return 0;
		cost = Math.min(cost, tempCost) || tempCost;
	}
	return cost;
}
