function superReducedString(s) {
	let arr = [...s];
	let isRemovable = arr.some((v, i) => v == arr[i + 1]);
	let newS;
	while (isRemovable && arr.length > 0) {
		newS = "";
		let j = 0;
		let i = 0;
		while (j < arr.length) {
			j = i + 1;
			while (arr[i] == arr[j]) {
				j++;
			}
			if ((j - i) % 2 == 1) {
				newS += arr[i];
			}
			i = j;
		}
		arr = [...newS];
		isRemovable = arr.some((v, i) => v == arr[i + 1]);
	}
	return newS.length > 0 ? newS : "Empty String";
}
