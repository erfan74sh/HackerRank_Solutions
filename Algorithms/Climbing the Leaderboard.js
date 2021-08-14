// * basic coding, faster solution:
function climbingLeaderboard(ranked, player) {
	let myRank = [];
	let uniqueRanked = [...new Set(ranked)];
	let i = uniqueRanked.length - 1;
	player.forEach((element) => {
		while (i >= 0) {
			if (element >= uniqueRanked[i]) {
				i--;
			} else {
				myRank.push(i + 2);
				break;
			}
		}
		if (i < 0) myRank.push(1);
	});
	return myRank;
}

// * advanced coding, but not that fast! :
function climbingLeaderboard2(ranked, player) {
	let myRank = [];
	let uniqueRanked = [...new Set(ranked)];
	let uniquePlayer = [...new Set(player)];
	for (let i = 0; i < uniquePlayer.length; i++) {
		let rank = uniqueRanked.findIndex((x) => x <= uniquePlayer[i]);
		for (let item of player.filter((v) => v == uniquePlayer[i])) {
			myRank.push(rank >= 0 ? rank + 1 : uniqueRanked.length + 1);
		}
	}
	return myRank;
}

// ! I find out that simple coding is faster than using some modern built-in functions!!!!
// ! In this case, it's because of that the "findIndex" function check the array from start in each loop
// ! but in the first way we check the array from the last index that we checked already
