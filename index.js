var generateBoard = function (range, x, y) {
	var r = Math.floor(Math.random() * range) + 1;
	var matrix = [];

	for (var i = 0; i < y; i++) {
		for (var j = 0; j < x; j++) {
			matrix[j, i] = Math.floor(Math.random() * range) + 1;
		}
		// matrix[i] = Array(x).fill(null);
	}

	for (var i = 0; i < y; i++) {
		for (var j = 0; j < x; j++) {
			console.log(matrix[j, i]);
		}
	}
}

generateBoard(1000000, 5, 5);