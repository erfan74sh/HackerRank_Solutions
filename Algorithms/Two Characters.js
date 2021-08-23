function alternate(s) {
	let max = 0;
	let arr = [...new Set(s)];
	let brr;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			brr = [...s].filter((v) => v == arr[i] || v == arr[j]);
			if (
				brr.every((v, i) => {
					return i % 2 ? v == brr[1] : v == brr[0];
				})
			) {
				max = Math.max(brr.length, max);
			}
		}
	}
	return max;
}
