function extraLongFactorials(n) {
	let res = 1n;
	for (let i = 2; i <= n; i++) {
		res *= BigInt(i);
	}
	console.log(res.toString());
}
