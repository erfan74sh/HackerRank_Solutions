function decentNumber(n) {
	let count5 = n;
	let count3 = 0;
	while ((count5 % 3 != 0 || count3 % 5 != 0) && count3 <= n - 5) {
		count5 -= 5;
		count3 += 5;
	}
	console.log(
		count5 % 3 == 0 && count3 % 5 == 0
			? Array.from({ length: count5 }, (v) => 5)
					.concat(Array.from({ length: count3 }, (v) => 3))
					.join("")
			: -1
	);
}
