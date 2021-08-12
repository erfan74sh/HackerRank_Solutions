function queensAttack(n, k, r_q, c_q, obstacles) {
	let top = obstacles
		.filter((v) => v[1] == c_q && v[0] > r_q)
		.sort((a, b) => a[0] - b[0])[0];
	top = top ? top[0] - r_q - 1 : n - r_q;

	let bot = obstacles
		.filter((v) => v[1] == c_q && v[0] < r_q)
		.sort((a, b) => b[0] - a[0])[0];
	bot = bot ? r_q - bot[0] - 1 : r_q - 1;

	let right = obstacles
		.filter((v) => v[0] == r_q && v[1] > c_q)
		.sort((a, b) => a[1] - b[1])[0];
	right = right ? right[1] - c_q - 1 : n - c_q;

	let left = obstacles
		.filter((v) => v[0] == r_q && v[1] < c_q)
		.sort((a, b) => b[1] - a[1])[0];
	left = left ? c_q - left[1] - 1 : c_q - 1;

	let topRight = obstacles
		.filter((v) => v[0] - r_q == v[1] - c_q && v[0] > r_q)
		.sort((a, b) => a[0] - b[0])[0];
	topRight = topRight ? topRight[0] - r_q - 1 : Math.min(n - r_q, n - c_q);

	let topLeft = obstacles
		.filter((v) => v[0] - r_q == c_q - v[1] && v[0] > r_q)
		.sort((a, b) => a[0] - b[0])[0];
	topLeft = topLeft ? topLeft[0] - r_q - 1 : Math.min(n - r_q, c_q - 1);

	let botRight = obstacles
		.filter((v) => r_q - v[0] == v[1] - c_q && v[0] < r_q)
		.sort((a, b) => b[0] - a[0])[0];
	botRight = botRight ? r_q - botRight[0] - 1 : Math.min(n - c_q, r_q - 1);

	let botLeft = obstacles
		.filter((v) => r_q - v[0] == c_q - v[1] && v[0] < r_q)
		.sort((a, b) => b[0] - a[0])[0];
	botLeft = botLeft ? r_q - botLeft[0] - 1 : Math.min(r_q - 1, c_q - 1);

	return top + bot + right + left + topRight + topLeft + botRight + botLeft;
}
