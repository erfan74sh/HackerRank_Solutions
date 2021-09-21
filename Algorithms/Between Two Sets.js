function getTotalX(a, b) {
	let res = [];
	for (let i = a[a.length - 1]; i <= b[0]; i++) {
		if (a.every((v) => i % v == 0) && b.every((v) => v % i == 0)) {
			res.push(i);
		}
	}
	return res.length;
}
