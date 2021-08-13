function twoArrays(k, A, B) {
	let str;
	A.sort((a, b) => a - b);
	B.sort((a, b) => b - a);
	A.every((v, i) => v + B[i] >= k) ? (str = "YES") : (str = "NO");
	return str;
}
