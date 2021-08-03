function gridSearch(G, P) {
	for (let i = 0; i <= G.length - P.length; i++) {
		let matchIndexes = [];
		for (let k = 0; k <= G[i].length - P[0].length; k++) {
			if (G[i].slice(k, k + P[0].length) == P[0]) {
				matchIndexes.push(k);
			}
		}
		if (matchIndexes.length > 0) {
			for (const index of matchIndexes) {
				for (let j = i + 1; j < P.length + i; j++) {
					if (G[j].slice(index, index + P[j - i].length) != P[j - i]) {
						break;
					}
					if (j - i + 1 == P.length) {
						return "YES";
					}
				}
			}
		}
	}
	return "NO";
}

// ! i don't use regex because of this example;
// ! here in "111111111111111" the regex 'matchAll' just match 3 of "11111"
// ! althogh there are 11 of "11111" in it
console.log(
	gridSearch(
		[
			"111111111111111",
			"111111111111111",
			"111111011111111",
			"111111111111111",
			"111111111111111",
		],
		["11111", "11111", "11110"]
	)
);
