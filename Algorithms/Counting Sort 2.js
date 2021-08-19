function countingSort(arr) {
	let brr = new Array(100).fill(0);
	arr.forEach((v) => brr[v]++);
	let crr = [];
	brr.forEach((v, i) => {
		for (let j = 0; j < v; j++) {
			crr.push(i);
		}
	});
	return crr;
}
