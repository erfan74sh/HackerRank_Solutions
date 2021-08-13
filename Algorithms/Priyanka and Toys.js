function toys(w) {
	w.sort((a, b) => a - b);
	let i = 0;
	let j = 1;
	let count = 1;
	while (j < w.length) {
		w[i] + 4 >= w[j] ? j++ : ((i = j), count++, j++);
	}
	return count;
}
