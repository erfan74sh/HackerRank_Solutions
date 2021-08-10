function balancedSums(arr) {
	let i = 0;
	let res = false;
	let before = arr.slice(0, i).reduce((a, b) => a + b, 0);
	let after = arr.slice(i + 1).reduce((a, b) => a + b, 0);
	while (!res && i < arr.length) {
		res = before == after;
		if (res) {
			return "YES";
		} else {
			before += arr[i];
			after -= arr[i + 1];
			i++;
		}
	}
	return "NO";
}
