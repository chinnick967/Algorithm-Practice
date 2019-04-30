function isInteresting(number, awesomePhrases) {
    // TODO
    var high = 0;
    var digits = (""+number).split("");
    var n;
    var tests = {};
    
    // zeroes
    var firstDig = [...digits].reduce((a, b) => parseInt(a) + parseInt(b)) > digits[0] ? parseInt(digits[0]) + 1 : parseInt(digits[0]);
    n = firstDig * Math.pow(10, digits.length - 1);
    if (n >= 100) {
      tests.zeroes = number == n ? 2 : closeNum(number, n);
    }
    
    // same
    n = parseInt([...digits].map(ele => digits[0].toString()).join(''));
    if (n >= 100) {
      tests.same = number == n ? 2 : closeNum(number, n);
    }
    
    // sequential
    n = parseInt([...digits].map((ele, index) => (parseInt(digits[0]) + index <= 9 ? parseInt(digits[0]) + index : 0).toString()).join(''));
    if (n >= 100) {
      tests.sequential = number == n ? 2 : closeNum(number, n);
    }
    
    // decremental
    n = parseInt([...digits].map((ele, index) => (digits[0] - index).toString()).join(''));
    if (n >= 100) {
      tests.decremental = number == n ? 2 : closeNum(number, n);
    }
    
    // palindrome
    n = parseInt([...digits].reverse().join(''));
    tests.palindrome = number == n && n >= 100 ? 2 : closePalinNum(number);
    
    // match awesome phrases
    var highest = 0;
    for (let i in awesomePhrases) {
      var curr = number == awesomePhrases[i] ? 2 : closeNum(number, awesomePhrases[i]);
      highest = curr > highest ? curr : highest;
    }
    tests.phrases = highest;
    
    // find highest number to return
    for (let i in tests) {
      high = tests[i] > high ? tests[i] : high;
    }
    
    return high;
  }
  
  function closeNum(num, n) {
    return num < n && num >= n - 2 ? 1 : 0;
  }
  
  function closePalinNum(number) {
    if (parseInt((number+1).toString().split('').reverse().join('')) == number+1 && number+1 >= 100) {
      return 1;
    } else if (parseInt((number+2).toString().split('').reverse().join('')) == number+2 && number+2 >= 100) {
      return 1;
    }
    return 0;
  }