const binaryArrayToNumber = arr => {
    return arr.reverse().reduce((a,v,i)=>{return a+Math.pow(2,i)*v});
  };