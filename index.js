const board = [];
const callList = [];

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
  // console.log(`This board has unique values in each cell: ${verifyBoard()}`);
}

function getRandomInt(max, target) {
  let ranNum = Math.floor((Math.random() * max) + 1);
  while (target[ranNum]) {
    ranNum = Math.floor((Math.random() * max) + 1);
  }
  target[ranNum] = true;
  return ranNum
}
// generateBoard(1000000, 1, 2);
generateBoard(10, 100);


console.table(board)