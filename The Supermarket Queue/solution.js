function queueTime(customers, n) {
    if (customers.length === 0) return 0;
    if (customers.length <= n) return Math.max(...customers);
    let whosleft = customers.slice(n);
    let queue = customers.slice(0, n);
    let time = 0;
    while(queue.length) {
      queue = queue.reduce((q, col) => {
        if (col === 0) {
          if (whosleft.length > 0) {
            q.push(whosleft.shift())
          }
        } else { q.push(col)}
        return q;
      }, [])
      for (let i = 0; i < queue.length; i++) {
        queue[i] = queue[i] - 1
      }
      if (queue.length){
          time++;
      }
    }
    return time;
  }