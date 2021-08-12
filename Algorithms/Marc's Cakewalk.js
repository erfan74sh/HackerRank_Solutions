function marcsCakewalk(calorie) {
	calorie.sort((a, b) => b - a);
	return calorie.reduce((a, v, i) => a + Math.pow(2, i) * v);
}
