function maximizingXor(l, r) {
	let max = 0;
	for (let i = l; i <= r; i++) {
		for (let j = i + 1; j <= r; j++) {
			let xor = i ^ j;
			if (xor > max) {
				max = xor;
			}
		}
	}
	return max;
}
