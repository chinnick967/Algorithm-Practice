var Sudoku = function(data) 
{
  return {
    isValid: function() {
      // YOUR SOLUTION
      for (var i = 0; i < data.length; i++) {
        // check if min and max numbers of each row are correct
        if (Math.max(...data[i]) != data.length || Math.min(...data[i]) != 1) {
          return false;
        }
        for (var j = 0; j < data[i].length; j++) {
          var num = data[i][j];
          // valid input
          if (isNaN(num) || typeof num != 'number') {
            return false;
          }
          // horizontal check
          if (data[i].filter(ele => ele == num).length != 1) {
            return false;
          }
          // vertical check
          for (var k = 0; k < data.length; k++) {
            var val = data[k][j];
            if (val == num && k != i) {
              return false;
            }
          }
        }
      }
      // box check
      var sq = Math.sqrt(data.length);
      if (sq % 1 === 0) { // is perfect square?
        var sqTest = [];
        for (var i = 0; i < data.length - sq; i+=sq) {
          var sqArr = [];
          for (var k = i; k < i + sq; k++) {
            for (var j = i; j < i + sq; j++) {
              sqArr.push(data[k][j]);
            }
          }
          sqTest.push(sqArr);
        }
        for (var i = 0; i < sqTest.length; i++) {
          var beforeLength = sqTest[i].length;
          if (sqTest[i].filter(ele => sqTest[i].indexOf(ele) === sqTest[i].lastIndexOf(ele)).length != beforeLength) {
            return false;
          }
        }
      }
      return true;
    }
  };
};