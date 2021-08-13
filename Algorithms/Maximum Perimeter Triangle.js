function maximumPerimeterTriangle(sticks) {
	sticks.sort((a, b) => b - a);
	for (let i = 0; i < sticks.length - 2; i++) {
		if (sticks[i] < sticks[i + 1] + sticks[i + 2]) {
			return [sticks[i + 2], sticks[i + 1], sticks[i]];
		}
	}
	return [-1];
}
