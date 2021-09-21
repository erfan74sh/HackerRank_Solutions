function breakingRecords(scores) {
	let min = scores[0];
	let max = scores[0];
	let breaks = [0, 0];
	scores.forEach((v) => {
		if (v < min) {
			min = v;
			breaks[1]++;
		} else if (v > max) {
			max = v;
			breaks[0]++;
		}
	});
	return breaks;
}
