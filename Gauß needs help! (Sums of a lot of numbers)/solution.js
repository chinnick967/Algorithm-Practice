function f(n){
    var numb = 0;
    for (var i = 1; i <= n; i++) {
        numb += i;
    }
    return n <= 0 || !Number.isInteger(n) ? false : numb;
};