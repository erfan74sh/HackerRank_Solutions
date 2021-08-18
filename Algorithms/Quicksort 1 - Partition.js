function quickSort(arr) {
	let pivot = arr[0];
	let left = [];
	let right = [];
	let equals = [pivot];
	for (let i = 1; i < arr.length; i++) {
		let value = arr[i];
		if (pivot < value) {
			right.push(arr[i]);
		} else if (pivot > value) {
			left.push(value);
		} else {
			equals.push(value);
		}
	}
	return left.concat(equals.concat(right));
}
