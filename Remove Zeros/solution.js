function removeZeros(array) {
    for (var i = 0; i < array.length; i++) {
      var ele = array[i];
      if (ele == 0 && !allPreviousEqualZero(i, array)) {
        array = removeElement(i, array);
        --i;
        array[array.length - 1] = ele;
      }
    }
    return array;
  }
  
  function allPreviousEqualZero(index, arr) {
    if (arr.length > 1) {
      for (var i = ++index; i < arr.length; i++) {
        if (arr[i] != 0) {
          return false;
        }
      }
    }
    return true;
  }
  
  function removeElement(index, arr) {
    if (arr.length > 1) {
      for (var i = ++index; i < arr.length; i++) {
        arr[i - 1] = arr[i]; 
      }
    }
    return arr;
  }