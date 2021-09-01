function alternatingCharacters(s) {
	let str = "";
	let count = 0;
	for (let i = 0; i < s.length - 1; i++) {
		s[i] !== s[i + 1] ? (str += s[i]) : count++;
	}
	return count;
}
