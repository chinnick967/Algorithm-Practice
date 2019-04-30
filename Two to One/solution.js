function longest(s1, s2) {
    // your code
    var l = [];
    var arr = s1.concat(s2);
    for (var i = 0; i < arr.length; i++) {
      if (!l.includes(arr[i])){l.push(arr[i])}
    }
    return l.sort().join("");
  }