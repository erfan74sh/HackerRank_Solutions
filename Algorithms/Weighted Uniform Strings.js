function weightedUniformStrings(s, queries) {
	let matches = s.match(/(\w)\1*/g);
	let u = [];
	let arr = [];
	for (let m of matches) {
		let weight;
		for (let i = 1; i <= m.length; i++) {
			weight = i * (m.charCodeAt(0) - 96);
			if (queries.includes(weight) && !u.includes(weight)) {
				u.push(weight);
			}
		}
	}
	for (let i of queries) {
		arr.push(u.includes(i) ? "Yes" : "No");
	}
	return arr;
}
