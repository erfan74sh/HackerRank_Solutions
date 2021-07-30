function encryption(s) {
	let arr = s.replace(/ /g, "").split("");
	let brr = [];
	let len = arr.length;
	let row = Math.floor(Math.sqrt(len));
	let col = Math.ceil(Math.sqrt(len));
	if (row * col < len) {
		do {
			row < col ? row++ : col++;
		} while (row * col < len);
	}
	for (let r = 0; r < row; r++) {
		brr.push(arr.slice(r * col, (r + 1) * col));
	}
	let res = "";
	for (let j = 0; j < brr[0].length; j++) {
		for (let k = 0; k < brr.length; k++) {
			res = brr[k][j] ? res + brr[k][j] : res;
		}
		if (j != brr[0].length - 1) {
			res += " ";
		}
	}
	return res;
}
