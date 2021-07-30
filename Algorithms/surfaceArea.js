function surfaceArea(A) {
	let surf = 0;
	A.forEach((element) => {
		for (let i = 0; i < element.length; i++) {
			surf += Math.max(
				element[i - 1] ? element[i] - element[i - 1] : element[i],
				0
			);
		}
		for (let i = element.length - 1; i >= 0; i--) {
			surf += Math.max(
				element[i + 1] ? element[i] - element[i + 1] : element[i],
				0
			);
		}
	});
	for (let i = 0; i < A[0].length; i++) {
		let arr = [];
		for (let j = 0; j < A.length; j++) {
			arr.push(A[j][i]);
		}
		for (let j = 0; j < arr.length; j++) {
			surf += Math.max(arr[j - 1] ? arr[j] - arr[j - 1] : arr[j], 0);
		}
		for (let j = arr.length - 1; j >= 0; j--) {
			surf += Math.max(arr[j + 1] ? arr[j] - arr[j + 1] : arr[j], 0);
		}
	}
	return (surf += A.flat().filter((v) => v != 0).length * 2);
}
