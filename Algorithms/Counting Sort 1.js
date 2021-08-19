function countingSort(arr) {
	let brr = new Array(100).fill(0);
	arr.forEach((v) => brr[v]++);
	return brr;
}
