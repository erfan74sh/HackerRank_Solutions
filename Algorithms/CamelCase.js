function camelcase(s) {
	let str = Array.from(s);
	return str.filter((v) => v == v.toUpperCase()).length + 1;
}
