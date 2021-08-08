function bomberMan(n, grid) {
	if (n == 1) return grid;
	if (n % 2 == 0) {
		let grid2 = [];
		let s = Array.from({ length: grid[0].length }).fill("O").join("");
		for (let i = 0; i < grid.length; i++) {
			grid2.push(s);
		}
		return grid2;
	}
	let grid2 = [];
	grid = grid.map((v) => {
		let a = "." + v + ".";
		return [...a];
	});
	grid.push(Array.from({ length: grid[0].length }).fill("."));
	grid.unshift(Array.from({ length: grid[0].length }).fill("."));
	for (let i = 0; i < grid.length; i++) {
		grid2.push([...grid[i]]);
	}
	for (let i = 1; i < grid.length - 1; i++) {
		for (let j = 1; j < grid[0].length - 1; j++) {
			if (
				grid[i + 1][j] == "O" ||
				grid[i - 1][j] == "O" ||
				grid[i][j - 1] == "O" ||
				grid[i][j + 1] == "O" ||
				grid[i][j] == "O"
			) {
				grid2[i][j] = ".";
			} else {
				grid2[i][j] = "O";
			}
		}
	}
	grid2.pop();
	grid2.shift();
	grid2 = grid2.map((v) => [...v].slice(1, v.length - 1).join(""));
	if ((n - 3) % 4 == 0) {
		return grid2;
	} else {
		let grid3 = [];
		grid2 = grid2.map((v) => {
			let a = "." + v + ".";
			return [...a];
		});
		grid2.push(Array.from({ length: grid2[0].length }).fill("."));
		grid2.unshift(Array.from({ length: grid2[0].length }).fill("."));
		for (let i = 0; i < grid2.length; i++) {
			grid3.push([...grid2[i]]);
		}
		for (let i = 1; i < grid2.length - 1; i++) {
			for (let j = 1; j < grid2[0].length - 1; j++) {
				if (
					grid2[i + 1][j] == "O" ||
					grid2[i - 1][j] == "O" ||
					grid2[i][j - 1] == "O" ||
					grid2[i][j + 1] == "O" ||
					grid2[i][j] == "O"
				) {
					grid3[i][j] = ".";
				} else {
					grid3[i][j] = "O";
				}
			}
		}
		grid3.pop();
		grid3.shift();
		grid3 = grid3.map((v) => [...v].slice(1, v.length - 1).join(""));
		return grid3;
	}
}
