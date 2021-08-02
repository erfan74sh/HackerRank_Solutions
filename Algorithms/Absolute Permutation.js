// ! i solve this challenge in 2 ways. the first one gets much time to terminate

// *first approach:
function absolutePermutation(n, k) {
	let arr = [];
	if (k == 0) {
		return Array.from({ length: n }, (v, i) => i + 1);
	} else if (n % k != 0 || (n % k == 0 && (n / k) % 2 != 0)) {
		return [-1];
	} else {
		for (let i = 1; i <= n / k; i++) {
			arr =
				i % 2 == 0
					? arr.concat(Array.from({ length: k }, (v, j) => j + (i - 2) * k + 1))
					: arr.concat(Array.from({ length: k }, (v, j) => j + i * k + 1));
		}
	}
	return arr;
}

//*second approach:
function absolutePermutation(n, k) {
	let arr = [];
	if (k == 0) {
		return Array.from({ length: n }, (v, i) => i + 1);
	} else if (n % k != 0 || (n % k == 0 && (n / k) % 2 != 0)) {
		return [-1];
	} else {
		for (let i = 1; i <= n / k; i++) {
			if (i % 2 == 0) {
				for (let j = 0; j < k; j++) {
					arr.push(j + (i - 2) * k + 1);
				}
			} else {
				for (let j = 0; j < k; j++) {
					arr.push(j + i * k + 1);
				}
			}
		}
	}
	return arr;
}
