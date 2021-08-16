function insertionSort1(n, arr) {
	const temp = arr[arr.length - 1];
	let i = arr.length - 2;
	while (arr[i] >= temp) {
		arr[i + 1] = arr[i];
		console.log(arr.join(" "));
		i--;
	}
	arr[i + 1] = temp;
	console.log(arr.join(" "));
}
