function luckBalance(k, contests) {
	let important = contests.filter((v) => v[1] == 1);
	important.sort((a, b) => a[0] - b[0]);
	let arr = important.concat(contests.filter((v) => v[1] == 0));
	return arr.reduce((a, v, i) => {
		return i < important.length - k ? a - v[0] : a + v[0];
	}, 0);
}
