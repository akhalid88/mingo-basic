const board = [];
const callList = [];
const usedCall = [];
const size = 5;
const max = 25;

const generateBoard = function (dim, max) {
	// var r = Math.floor(Math.random() * range) + 1;
	// const board = {};
	let usedNums = {};

	for (let i = 0; i < dim; i++) {
		let row = [];
		for (let j = 0; j < dim; j++) {
			row.push(getRandomInt(max, usedNums));
		}
		board.push(row);
	}
}

function getRandomInt(max, target) {
	let ranNum = Math.floor((Math.random() * max) + 1);
	while (target[ranNum]) {
		ranNum = Math.floor((Math.random() * max) + 1);
	}
	target[ranNum] = true;
	return ranNum
}

function playGame() {
	let win = false;
	let turns = 0;

	while (!win) {
		callList.push(getRandomInt(max, usedCall));

		if (checkRows(turns)) {
			win = true;
		} else if (checkColumns(turns)) {
			win = true;
		} else if (checkDiagonals(turns)) {
			win = true;
		} else {
			turns++;
			// console.log("You have failed me for the last time, Admiral");
		}
	}
}

function checkRows(turns) {
	let rowCount = 0;

	for (let i = 0; i < size; i++) {
		rowCount = 0;
		for (let j = 0; j < size; j++) {
			for (let k = 0; k < turns; k++) {
				console.log(`Checking ${board[i][j]} at [${i}][${j}] for value ${callList[k]} `)
				if (board[i][j] === callList[k]) {
					rowCount++
					console.log(rowCount);
					break;
				}
			}
			if (rowCount === size) {
				console.log(`Row victory after ${turns} turns`);
				return true;
			}
		}
	}
	return false;
}

function checkColumns(turns) {
	let colCount = 0;
	for (let i = 0; i < size; i++) {
		colCount = 0;
		for (let j = 0; j < size; j++) {
			for (let k = 0; k < turns; k++) {
				console.log(`Checking ${board[i][j]} at [${i}][${j}] for value ${callList[k]} `)
				if (board[i][j] === callList[k]) {
					colCount++
					console.log(colCount);
					break;
				}
			}
			if (colCount === size) {
				console.log(`Row victory after ${turns} turns`);
				return true;
			}
		}
	}
	return false;
}

function checkDiagonals(turns) {

}

// generateBoard(1000000, 1, 2);
generateBoard(size, max);
playGame();

console.table(board)
console.log(callList)