function maximumToys(prices, k) {
	let filterd = prices.filter((v) => v <= k);
	filterd.sort((a, b) => a - b);
	let i = 0;
	let cost = 0;
	while (cost <= k) {
		cost += filterd[i];
		i++;
	}
	return i - 1;
}
