function anagram(s) {
	if (s.length % 2 != 0) {
		return -1;
	} else {
		let lStr = [...s.substring(0, s.length / 2)];
		let rStr = [...s.substring(s.length / 2)];
		let arr = [];
		[...new Set(lStr)].forEach((v) => {
			let lCount = lStr.filter((V2) => V2 == v).length;
			let rCount = rStr.filter((v3) => v3 == v).length;
			if (!rStr.includes(v)) {
				for (let i = 0; i < lCount; i++) {
					arr.push(v);
				}
			} else if (lCount != rCount && lCount > rCount) {
				for (let i = 0; i < lCount - rCount; i++) {
					arr.push(v);
				}
			}
		});
		return arr.length >= 0 ? arr.length : -1;
	}
}
