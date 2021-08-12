function minimumAbsoluteDifference(arr) {
	arr.sort((a, b) => a - b);
	return arr.reduce((a, v, i) => {
		if (i + 1 < arr.length) {
			return Math.min(a, Math.abs(v - arr[i + 1]));
		} else return a;
	}, Math.abs(arr[0] - arr[1]));
}
