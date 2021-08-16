function bigSorting(unsorted) {
	return unsorted.sort((a, b) => {
		if (a.length != b.length) {
			return a.length - b.length;
		} else {
			for (let i = 0; i < a.length; i++) {
				if (a[i] < b[i]) {
					return -1;
				} else if (a[i] > b[i]) {
					return 1;
				}
			}
			return 0;
		}
	});
}
