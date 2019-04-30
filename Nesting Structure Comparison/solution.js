Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array. 
    return arraysMatch(this, other);
};

function arraysMatch(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (isArray(arr1[i]) == isArray(arr2[i])) {
        if (isArray(arr1[i])) {
          return arraysMatch(arr1[i], arr2[i]);
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}