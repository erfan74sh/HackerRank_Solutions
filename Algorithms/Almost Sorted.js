function almostSorted(arr) {
	const checkForReversePosibility = () => {
		let brr = [...arr];
		let l;
		let r;
		for (let i = 0; i < brr.length - 1; i++) {
			if (brr[i + 1] < brr[i]) {
				l = i;
				r = i + 1;
				while (brr[r] > brr[r + 1] && r < brr.length) {
					r++;
				}
				return brr
					.slice(0, l)
					.concat(brr.slice(l, r + 1).reverse())
					.concat(brr.slice(r + 1))
					.join("") == brr.sort((a, b) => a - b).join("")
					? [l, r]
					: false;
			}
		}
		return false;
	};
	const checkForSwapPossibility = () => {
		let brr = [...arr];
		let l;
		let r;
		for (let i = 0; i < brr.length - 1; i++) {
			if (brr[i] > brr[i + 1]) {
				l = i;
				r = brr.findIndex((v) => v < brr[i + 1] && v > (brr[i - 1] || 0));
				if (r == -1) {
					r = l + 1;
				}
				[brr[l], brr[r]] = [brr[r], brr[l]];
				return brr.join("") == brr.sort((a, b) => a - b).join("")
					? [l, r]
					: false;
			}
		}
		return false;
	};
	let isReversable = checkForReversePosibility();
	let isSwapable = checkForSwapPossibility();

	if (isSwapable) {
		console.log(`yes\nswap ${isSwapable[0] + 1} ${isSwapable[1] + 1}`);
	} else if (isReversable) {
		console.log(`yes\nreverse ${isReversable[0] + 1} ${isReversable[1] + 1}`);
	} else {
		console.log("no");
	}
}
