function hackerrankInString(s) {
	let arr = ["h", "a", "c", "k", "e", "r", "r", "a", "n", "k"];
	let str = s;
	let i = 0;
	let isHacherrank = true;
	for (let ch of arr) {
		if (isHacherrank) {
			str = str.slice(i);
			i = str.indexOf(ch);
			i >= 0 ? i++ : (isHacherrank = false);
		} else {
			return "NO";
		}
	}
	return "YES";
}
