function makingAnagrams(s1, s2) {
	let arr = [...new Set(s1.concat(s2))];
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		let s1ArrLength = [...s1].filter((v) => v == arr[i]).length;
		let s2ArrLength = [...s2].filter((v) => v == arr[i]).length;
		if (s1ArrLength !== s2ArrLength) {
			count += Math.abs(s2ArrLength - s1ArrLength);
		}
	}
	return count;
}
