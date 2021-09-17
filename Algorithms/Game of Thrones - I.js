function gameOfThrones(s) {
	if (s.length % 2 == 0) {
		return [...new Set(s)].every(
			(v) => [...s].filter((val) => val == v).length % 2 == 0
		)
			? "YES"
			: "NO";
	} else {
		let oddArr = [...s].filter(
			(v) => [...s].filter((val) => val == v).length % 2 == 1
		);
		if ([...new Set(oddArr)].length > 1) {
			return "NO";
		} else {
			let evenArr = [...s].filter((v) => v !== oddArr[0]);
			return [...new Set(evenArr)].every(
				(v) => evenArr.filter((val) => val == v).length % 2 == 0
			)
				? "YES"
				: "NO";
		}
	}
}
