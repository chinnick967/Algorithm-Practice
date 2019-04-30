function humanReadable(seconds) {
    // TODO
    var hours = Math.floor(seconds/3600);
    var mins = Math.floor((seconds - hours * 3600) / 60);
    var secs = seconds - (hours * 3600 + mins * 60);
    
    return forceTwoDigits(hours) + ":" + forceTwoDigits(mins) + ":" + forceTwoDigits(secs);
  }
  
  function forceTwoDigits(num) {
    return num < 10 ? '0' + num.toString() : num.toString();
  }