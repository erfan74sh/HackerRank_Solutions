function caesarCipher(s, k) {
	let arr = [...s];
	k = k % 26;
	arr.forEach((v, i) => {
		let charCode = s.charCodeAt(i);
		if (charCode >= 97 && charCode <= 122) {
			arr[i] =
				charCode + k > 122
					? String.fromCharCode(96 + (k - (122 - charCode)))
					: String.fromCharCode(charCode + k);
		} else if (charCode >= 65 && charCode <= 90) {
			arr[i] =
				charCode + k > 90
					? String.fromCharCode(64 + (k - (90 - charCode)))
					: String.fromCharCode(charCode + k);
		}
	});
	return arr.join("");
}
