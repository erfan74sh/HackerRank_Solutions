function nonDivisibleSubset(k, s) {
	let max = 0;
	if (s.find((v) => v % k == 0) != undefined) max++;
	if (k % 2 == 0)
		max = s.find((v) => v % k == k / 2) != undefined ? max + 1 : max;
	for (let i = 1; i < k / 2; i++) {
		max += Math.max(
			s.filter((v) => v % k == i).length,
			s.filter((v) => v % k == k - i).length
		);
	}
	return max;
}
