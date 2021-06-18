const generateBoard = function (range, x, y) {
	// var r = Math.floor(Math.random() * range) + 1;
	const board = {};
	const usedNums = {};

	let i = 0;
	while (i < x * y) {
		let r = Math.floor(Math.random() * range) + 1;
		if (!usedNums[r]) {
			usedNums[r] = true;
			board[i] = r;
			i++
		}
	}

	console.table(board);
}

// generateBoard(1000000, 1, 2);
generateBoard(100, 10, 10);