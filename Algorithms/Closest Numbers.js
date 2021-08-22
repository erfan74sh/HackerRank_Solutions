function closestNumbers(arr) {
	arr.sort((a, b) => a - b);
	const mapped = arr.map((v, i) => {
		let obj = {};
		obj.values = [v, arr[i + 1]];
		obj.dif = Math.abs(v - arr[i + 1]);
		return obj;
	});
	return mapped
		.sort((a, b) => a.dif - b.dif)
		.filter((v) => v.dif == mapped[0].dif)
		.map((v1) => v1.values)
		.flat();
}
