function organizingContainers(container) {
	let count = [];
	container.forEach((v) => {
		count.push(v.reduce((a, val) => a + val));
	});
	let types = {};
	for (let arr of container) {
		arr.forEach((v, i) => {
			types.hasOwnProperty(i) ? (types[i] += v) : (types[i] = v);
		});
	}
	let typesCount = Object.values(types);
	return count.sort((a, b) => a - b).join("") ==
		typesCount.sort((a, b) => a - b).join("")
		? "Possible"
		: "Impossible";
}

console.log(
	organizingContainers([
		[0, 2, 1],
		[1, 1, 1],
		[2, 0, 0],
	])
);
