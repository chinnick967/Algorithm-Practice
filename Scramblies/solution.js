function scramble(str1, str2) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    for (var i = 0; i < alphabet.length; i++) {
      var reg = new RegExp(alphabet[i],"g");
      var str1Count = (str1.match(reg) || []).length;
      var str2Count = (str2.match(reg) || []).length;
      if (str2Count > str1Count) {
        return false;
      }
    }
    return true;
}