function sumStrings(a,b) { 
    a = a == '' ? '0' : a;
    b = b == '' ? '0' : b;
    
    var aDigits = a.split('').reverse();
    var bDigits = b.split('').reverse();
    
    var bigger = aDigits.length >= bDigits.length ? aDigits : bDigits;
    var smaller = aDigits.length < bDigits.length ? aDigits : bDigits;
    var newNumber = [];
    var remainder = 0
    
    // the test cases on this problem require solving massive numbers that JS puts in scientific notation, hence this solution
    for (var i = 0; i < bigger.length; i++) {
      var n = smaller[i] ? parseInt(bigger[i]) + parseInt(smaller[i]) + remainder : parseInt(bigger[i]) + remainder;
      remainder = n >= 10 ? 1 : 0;
      n = remainder > 0 ? n - 10 : n;
      newNumber.push(n.toString());
    }
    
    if (remainder != 0) {
      newNumber.push(remainder);
    }
    
    // remove extra 0s
    for (var i = newNumber.length - 1; i > 0; i--) {
      if (newNumber[i] == '0') {
        newNumber.pop();
      } else {
        i = 0;
      }
    }
    
    return newNumber.reverse().join('');
}