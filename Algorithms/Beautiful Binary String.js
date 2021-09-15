function beautifulBinaryString(b) {
	let count = 0;
	let i = 0;
	while (i <= b.length - 3) {
		if (b.slice(i, i + 3) == "010") {
			count++;
			i += 3;
		} else {
			i++;
		}
	}
	return count;
}
