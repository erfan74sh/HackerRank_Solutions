function separateNumbers(s) {
	for (let i = 1; i <= Math.floor(s.length / 2); i++) {
		let str = [...s].slice(0, i).join("");
		let first = str;
		let num = BigInt(str);
		while (str.length < s.length) {
			str += (num + 1n).toString(10);
			num++;
		}
		if (str == s) {
			console.log(`YES ${first}`);
			return;
		}
	}
	console.log("NO");
}
