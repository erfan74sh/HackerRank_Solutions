function lonelyinteger(a) {
	let unique;
	a.forEach((v, i) => {
		if (!a.slice(0, i).includes(v) && !a.slice(i + 1).includes(v)) {
			unique = v;
		}
	});
	return unique;
}
