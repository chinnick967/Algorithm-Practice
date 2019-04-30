function sumIntervals(intervals){
    //TODO
    var intervals_nooverlap = [];
    for (var i = 0; i < intervals.length; i++) {
      var interval = intervals[i];
      var flag = true;
      for (var j = 0; j < intervals_nooverlap.length; j++) {
        var overlapInterval = intervals_nooverlap[j];
        if (interval[0] >= overlapInterval[0] && interval[0] <= overlapInterval[1]) {
          flag = false;
          if (interval[1] > overlapInterval[1]) {
            intervals_nooverlap[j][1] = interval[1];
          }
        } else if (interval[1] >= overlapInterval[0] && interval[1] <= overlapInterval[1]) {
          flag = false;
          if (interval[0] < overlapInterval[0]) {
            intervals_nooverlap[j][0] = interval[0];
          }
        }
      }
      if (flag) { intervals_nooverlap.push(interval); }
    }
  
    if (intervals_nooverlap.length > 1) {
      return intervals_nooverlap.reduce((total,current) => total + (current[1] - current[0]), 0);
    } else if (intervals_nooverlap.length == 1) {
      return intervals_nooverlap[0][1] - intervals_nooverlap[0][0];
    } else {
      return 0;  
    }
  }