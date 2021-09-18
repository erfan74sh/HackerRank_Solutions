function kangaroo(x1, v1, x2, v2) {
	let res = (x2 - x1) / (v1 - v2);
	let a;
	Number.isInteger(res) && res >= 0 ? (a = "YES") : (a = "NO");
	return a;
}
