function sudoku(puzzle) {
    //return the solved puzzle as a 2d array of 9 x 9 
    var solved = false;
  
    while (!solved) {
      var anyUnsolved = false;
      var foundOne = false;
      for (var y = 0; y < puzzle.length; y++) {
        for (var x = 0; x < puzzle[y].length; x++) {
          if (puzzle[y][x] == 0) {
            anyUnsolved = true;
            var possible = checkPossiblities(puzzle, x, y);
            if (possible.length == 1) {
              puzzle[y][x] = possible[0];
              foundOne = true;
            }
          }
        }
      }
      if (!anyUnsolved || foundOne == false) {
        solved = true;
      }
    }
    return puzzle;
  }
  
  function checkPossiblities(puzzle, x, y) {
    var notPossible = [];
    var possible = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // check x
    for (var i = 0; i < 9; i++) {
      if (puzzle[y][i] != 0) {
        notPossible.push(puzzle[y][i]);
      }
    }
    // check y
    for (var i = 0; i < 9; i++) {
      if (puzzle[i][x] != 0) {
        notPossible.push(puzzle[i][x]);
      }
    }
    
    // check in square
    var groupStart = {
      1: 0,
      2: 3,
      3: 6
    };
    var xGroupStart = groupStart[Math.ceil((x + 1) / 3)];
    var yGroupStart = groupStart[Math.ceil((y + 1) / 3)];
    for (var i = yGroupStart; i < yGroupStart + 3; i++) {
      for (var j = xGroupStart; j < xGroupStart + 3; j++) {
        if (puzzle[i][j] != 0) {
          notPossible.push(puzzle[i][j]);
        }
      }
    }
  
    // find missing numbers
    for (var i = 0; i < notPossible.length; i++) {
      for (var j = 0; j < possible.length; j++) {
        if (notPossible[i] == possible[j]) {
          possible.splice(j, 1);
        }
      }
    }
  
    return possible;
  }