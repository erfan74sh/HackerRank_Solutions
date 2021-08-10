function missingNumbers(arr, brr) {
	let uniqueVal = [];
	let dif = [];
	for (let i = 0; i < brr.length; i++) {
		if (!uniqueVal.includes(brr[i])) {
			uniqueVal.push(brr[i]);
		}
	}
	uniqueVal.forEach((v) => {
		if (arr.filter((g) => g == v).length !== brr.filter((d) => d == v).length) {
			dif.push(v);
		}
	});
	return dif.sort((a, b) => a - b);
}
