var uniqueInOrder=function(iterable){
    var index = 0;
    iterable = typeof iterable == "string" ? iterable.split("") : iterable;
    while (index < iterable.length - 1) {
      if (iterable[index + 1] == iterable[index]) {
        iterable.splice(index, 1);
      } else {
        index++;
      }
    }
    return iterable;
  }