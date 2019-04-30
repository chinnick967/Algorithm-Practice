function deleteNth(arr,n){
    var remove = [];
    var checked = {};
    for (let i=0; i < arr.length; i++) {
      if (!checked[arr[i]]) {
        checked[arr[i]] = {count: 0};
      }
    }
    return createArr(arr, checked, n);
  }
  
  function createArr(arr, checked, n) {
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
       if (checked[arr[i]].count < n) {
         checked[arr[i]].count++;
         newArr.push(arr[i]);
       }
    }
    return newArr;
  }