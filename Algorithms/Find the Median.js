function findMedian(arr) {
	return arr.sort((a, b) => a - b)[(arr.length - 1) / 2];
}
