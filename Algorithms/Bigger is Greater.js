function biggerIsGreater(w) {
	let arr = w.split("");
	for (let i = arr.length - 2; i >= 0; i--) {
		// starting from end to find the index that there is/are greater
		// characters after that and store that character(s)
		let biggerChars = arr.slice(i + 1).filter((v) => arr[i] < v);
		if (biggerChars.length > 0) {
			// find the smallest character that is also bigger than the previous character
			let index;
			index = i + 1 + arr.slice(i + 1).indexOf(biggerChars.sort()[0]);
			// and swap those with each other
			[arr[i], arr[index]] = [arr[index], arr[i]];
			// also sort the rest of the string after pivot character to have
			// the smallest permutation bigger than the original string
			return arr
				.slice(0, i + 1)
				.concat(arr.slice(i + 1).sort())
				.join("");
		}
	}
	// if we cant find a pivot character, the original string is the answer
	return "no answer";
}
