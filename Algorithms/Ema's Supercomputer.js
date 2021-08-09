function twoPluses(grid) {
	let valids = [];
	for (let i = 1; i < grid.length - 1; i++) {
		for (let j = 1; j < grid[0].length - 1; j++) {
			if (grid[i][j] == "G") {
				let valid = [];
				valid.push(`${i}${j}`);
				for (
					let k = 1;
					k <= Math.min(i, j, grid.length - i - 1, grid[0].length - j - 1);
					k++
				) {
					if (
						grid[i][j + k] == "G" &&
						grid[i][j - k] == "G" &&
						grid[i + k][j] == "G" &&
						grid[i - k][j] == "G"
					) {
						valid = valid.concat(
							`${i}${j + k}`,
							`${i}${j - k}`,
							`${i + k}${j}`,
							`${i - k}${j}`
						);
						valids.push(valid);
					} else {
						break;
					}
				}
			}
		}
	}
	valids.sort((a, b) => b.length - a.length);
	let max = valids[0] ? valids[0].length : 1;
	if (max == 1) return 1;
	for (let i = 0; i < valids.length - 1; i++) {
		for (let j = i + 1; j < valids.length; j++) {
			if (!valids[i].some((v) => valids[j].includes(v))) {
				max = Math.max(valids[i].length * valids[j].length, max);
			}
		}
	}
	return max;
}
