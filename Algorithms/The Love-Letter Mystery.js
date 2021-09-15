function theLoveLetterMystery(s) {
	let operation = 0;
	for (let i = 0; i < Math.floor(s.length / 2); i++) {
		operation += Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length - i - 1));
	}
	return operation;
}
