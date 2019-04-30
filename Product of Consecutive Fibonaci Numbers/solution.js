function productFib(prod){
    // ...
    var flag = true;
    var num = 0;
    while (flag) {
      var factors = [fib(num), fib(num + 1)];
      var result = factors[0] * factors[1];
      if (result < prod) {
        num++;
      } else {
        return result == prod ? [factors[0], factors[1], true] : [factors[0], factors[1], false];
      }
    }
  }
  
  function fib(num) {
    if (num == 0) {
      return 0;
    } else if (num == 1) {
      return 1;
    }
    return fib(num - 1) + fib(num - 2);
  }