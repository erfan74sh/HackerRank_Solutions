function larrysArray(A) {
	let arr = A;
	for (let i = 1; i <= A.length; i++) {
		let index = A.indexOf(i);
		while (index != i - 1) {
			if (index != A.length - 1) {
				A.splice(index - 1, 3, i, A[index + 1], A[index - 1]);
				index--;
				if (index < i - 1) {
					return "NO";
				}
			} else {
				A.splice(index - 2, 3, i, A[index - 2], A[index - 1]);
				index -= 2;
				if (index < i - 1) {
					return "NO";
				}
			}
		}
	}
	if (A.join("") == arr.sort((a, b) => a - b).join("")) {
		return "YES";
	}
}
