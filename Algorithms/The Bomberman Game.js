function bomberMan(n, grid) {
	const nexGrid = (g) => {
		let grid2 = [];
		g = g.map((v) => {
			let a = "." + v + ".";
			return [...a];
		});
		g.push(Array.from({ length: g[0].length }).fill("."));
		g.unshift(Array.from({ length: g[0].length }).fill("."));
		for (let i = 0; i < g.length; i++) {
			grid2.push([...g[i]]);
		}
		for (let i = 1; i < g.length - 1; i++) {
			for (let j = 1; j < g[0].length - 1; j++) {
				if (
					g[i + 1][j] == "O" ||
					g[i - 1][j] == "O" ||
					g[i][j - 1] == "O" ||
					g[i][j + 1] == "O" ||
					g[i][j] == "O"
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
		return grid2;
	};
	if (n == 1) return grid;
	else if (n % 2 == 0) {
		let grid2 = [];
		let s = Array.from({ length: grid[0].length }).fill("O").join("");
		for (let i = 0; i < grid.length; i++) {
			grid2.push(s);
		}
		return grid2;
	} else {
		let g2 = nexGrid(grid);
		return (n - 3) % 4 == 0 ? g2 : nexGrid(g2);
	}
}

console.log(
	bomberMan(3, [
		".......",
		"...O...",
		"....O..",
		".......",
		"OO.....",
		"OO.....",
	])
);
