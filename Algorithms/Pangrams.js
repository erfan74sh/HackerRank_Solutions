function pangrams(s) {
	return [...new Set(s.toLowerCase().split(" ").join(""))].length == 26
		? "pangram"
		: "not pangram";
}
