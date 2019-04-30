function findOutlier(integers){
    //your code here
    var even = (integers[0] % 2 == 0 && integers[1] % 2 == 0) || (integers[1] % 2 == 0 && integers[2] % 2 == 0) || (integers[0] % 2 == 0 && integers[2] % 2 == 0);
    for (var i = 0; i < integers.length; i++) { 
      var num = (even && integers[i] % 2 != 0) || (!even && integers[i] % 2 == 0) ? integers[i] : false;
      if (num || (integers[i] == 0 && !even)) {return num}
    }
}