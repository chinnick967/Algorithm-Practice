function domainName(url){
    var clip1, clip2;
    
    if (url.indexOf("www") > -1 || url.indexOf("http") > -1) {
      clip1 = url.indexOf("www") > url.indexOf("http") ? url.indexOf("www") + 4 : url.indexOf("//") + 2;
    } else {
      clip1 = 0;
    }
    
    clip2 = url.indexOf("www") > url.indexOf("http") ? url.indexOf(".", url.indexOf("www") + 4) : url.indexOf(".");
    
    return url.substring(clip1, clip2);
    
  }