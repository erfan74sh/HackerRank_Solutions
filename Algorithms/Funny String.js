function funnyString(s) {
	let rS = [...s].reverse().join("");
	for (let i = 0; i < s.length - 1; i++) {
		let sDif = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
		let rSDif = Math.abs(rS.charCodeAt(i) - rS.charCodeAt(i + 1));
		if (sDif !== rSDif) {
			return "Not Funny";
		}
	}
	return "Funny";
}
