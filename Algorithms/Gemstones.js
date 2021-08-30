function gemstones(arr) {
	let str = [...new Set(...arr)];
	let count = 0;
	for (let i of str) {
		if (arr.every((v) => v.includes(i))) {
			count++;
		}
	}
	return count;
}
