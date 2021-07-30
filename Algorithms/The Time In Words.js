function timeInWords(h, m) {
	const d = {
		1: "one",
		2: "two",
		3: "three",
		4: "four",
		5: "five",
		6: "six",
		7: "seven",
		8: "eight",
		9: "nine",
		10: "ten",
		11: "eleven",
		12: "twelve",
		13: "thirteen",
		14: "fourtheen",
		15: "fifteen",
		16: "sixteen",
		17: "seventeen",
		18: "eighteen",
		19: "nineteen",
		20: "twenty",
		21: "twenty one",
		22: "twenty two",
		23: "twenty three",
		24: "twenty foure",
		25: "twenty five",
		26: "twenty six",
		27: "twenty seven",
		28: "twenty eight",
		29: "twenty nine",
		30: "thirteen",
	};
	if (m > 30) {
		m = 60 - m;
		return m === 15
			? `quarter to ${d[h + 1]}`
			: `${d[m]} ${m == 1 ? "minute" : "minutes"} to ${d[h + 1]}`;
	} else {
		return m === 15
			? `quarter past ${d[h]}`
			: m === 0
			? `${d[h]} o' clock`
			: m === 30
			? `half past ${d[h]}`
			: `${d[m]} ${m == 1 ? "minute" : "minutes"} past ${d[h]}`;
	}
}
