function gridChallenge(grid) {
	grid.map((v, i) => (grid[i] = [...v].sort().join("")));
	for (let i = 0; i < grid.length; i++) {
		let temp = [];
		for (let j = 0; j < grid.length; j++) {
			temp.push(grid[j][i]);
		}
		if (temp.join("") != temp.sort().join("")) {
			return "NO";
		}
	}
	return "YES";
}
