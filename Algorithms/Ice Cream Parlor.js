function icecreamParlor(m, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr.slice(i + 1).includes(m - arr[i])) {
			return [
				i + 1,
				arr.slice(0, i + 1).length + arr.slice(i + 1).indexOf(m - arr[i]) + 1,
			];
		}
	}
}
