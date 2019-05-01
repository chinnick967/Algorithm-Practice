function hand(holeCards, communityCards) {

    var test;
    
    var cards = holeCards.concat(communityCards).map((card) => {
      var cArr = card.split('');
      return {
        rank: cArr.length < 3 ? cArr[0] : cArr[0] + cArr[1],
        suit: cArr.length < 3 ? cArr[1] : cArr[2]
      }
    });
    
    // Straight Flush
    test = straightFlush(cards);
    if (test.length > 1) { return {type: "straight-flush", ranks: test}; }
    
    // Four-Of-A-Kind
    test = fourOfAKind(cards);
    if (test.length > 1) { return {type: "four-of-a-kind", ranks: test}; }
    
    // Full House
    test = fullHouse(cards);
    if (test.length > 1) { return {type: "full house", ranks: test}; }
    
    // Flush
    test = flush(cards);
    if (test.length > 1) { return {type: "flush", ranks: test}; }
    
    // Straight
    test = straight(cards);
    if (test.length > 1) { return {type: "straight", ranks: test}; }
    
    // Three of a Kind
    test = threeOfAKind(cards);
    if (test.length > 1) { return {type: "three-of-a-kind", ranks: test}; }
    
    // Two Pairs
    test = twoPair(cards);
    if (test.length > 1) { return {type: "two pair", ranks: test}; }
    
    // One Pair
    test = pair(cards);
    if (test.length > 0) { return {type: "pair", ranks: test}; }
    
    var ranks = cards.sort((a,b) => getRank(b) - getRank(a));
    while (ranks.length > 5) {
      ranks.pop();
    }
    return {type:"nothing", ranks: ranks.sort((a,b) => getRank(b) - getRank(a)).map(ele => ele.rank)}; // return top cards
  }
  
  function addRemainingCards(currentCards, cards, num) {
    var addedCards = [];
    cards = cards.sort((a,b) => getRank(b) - getRank(a));
    var i = 0;
    while (addedCards.length < num && i != cards.length) {
      var rank = cards[i].rank;
      if (!addedCards.includes(rank) && !currentCards.includes(rank)) {
        addedCards.push(rank);
      }
      i++;
    }
    return currentCards.concat(addedCards);
  }
  
  function getRank(card) {
    var rank = typeof card == 'string' ? card : card.rank;
    if (isNaN(rank)) {
      switch (rank) {
        case 'A':
          return 14;
        case 'K':
          return 13;
        case 'Q':
          return 12;
        case 'J':
          return 11;
        default:
          return 0
      }
    } else {
      return parseInt(rank);
    }
  }
  
  function straightFlush(cards) {
    var ranks = [];
    for (let i in cards) {
      ranks = [];
      var arr = [...cards].filter(card => card.suit == cards[i].suit && getRank(card.rank) > getRank(cards[i].rank)).map(card => card.rank);
      arr = arr.filter((card,index) => index == arr.lastIndexOf(card)).sort((a,b) => getRank(a) - getRank(b));
      ranks.push(cards[i].rank);
      for (let j = 0; j < arr.length; j++) {
        if (getRank(arr[j]) != getRank(ranks[0]) + j+1 && ranks.length < 5) {break;}
        else {ranks.push(arr[j]);} 
      }
      while (ranks.length > 5) {
        ranks.shift();
      }
      if (ranks.length == 5) { return ranks.sort((a,b) => getRank(b) - getRank(a))};
    }
    return [];
  }
  
  function fourOfAKind(cards) {
    var ranks = [];
    for (let i in cards) {
      ranks = [...cards].filter(card => card.rank == cards[i].rank);
      if (ranks.length >= 4) { return addRemainingCards([ranks[0].rank], cards, 1); }
    }
    return [];
  }
  
  function fullHouse(cards) {
    var used = [], matches = [], triple = [], pair = [];
    for (let i in cards) {
      if (!used.includes(cards[i].rank)) {
        used.push(cards[i].rank);
        var arr = [...cards].filter(card => card.rank == cards[i].rank);
        if (arr.length >= 2) { matches.push(arr); }
      }
    }
    for (let i in matches) {
      if (matches[i].length >= 3) {
        if (triple.length < 1 || getRank(matches[i][0]) > getRank(triple[0])) {
          triple = [matches[i][0], matches[i][1], matches[i][2]];
        } else if (pair.length < 1 || getRank(matches[i][0]) > getRank(pair[0])) {
          pair = [matches[i][0], matches[i][1]];
        }
      } else if (matches[i].length == 2) {
        if (pair.length < 1 || getRank(matches[i][0]) > getRank(pair[0])) {
          pair = [matches[i][0], matches[i][1]];
        }
      }
    }
    if (triple.length > 0 && pair.length > 0) { return [triple[0], pair[0]].map(ele => ele.rank); }
    return [];
  }
  
  function flush(cards) {
    var ranks = [];
    for (let i in cards) {
      ranks = [...cards].filter(card => card.suit == cards[i].suit);
      if (ranks.length >= 5) {
        ranks = ranks.sort((a,b) => getRank(a) - getRank(b));
        while (ranks.length > 5) {
          ranks.shift();
        }
        return ranks.sort((a,b) => getRank(b) - getRank(a)).map(ele => ele.rank);
      }
    }
    return [];
  }
  
  function straight(cards) {
    var ranks = [];
    cards = cards.sort((a,b) => getRank(a) - getRank(b));
    for (let i in cards) {
      if (ranks.length == 0) {
        ranks = [cards[i]];
      } else {
        var cRank = parseInt(getRank(cards[i]));
        var lRank = parseInt(getRank(ranks[ranks.length-1]));
        if (cRank == lRank + 1) { ranks.push(cards[i]); } 
        else if (cRank != lRank && ranks.length < 5) { ranks = [cards[i]]; }
      }
    }
    while (ranks.length > 5) {
      ranks.shift();
    }
    return ranks.length == 5 ? ranks.sort((a,b) => getRank(b) - getRank(a)).map(ele => ele.rank) : [];
  }
  
  function threeOfAKind(cards) {
    var ranks = [];
    for (let i in cards) {
      ranks = [...cards].filter(card => card.rank == cards[i].rank);
      if (ranks.length >= 3) { return addRemainingCards([ranks[0]].map(ele => ele.rank), cards, 2); }
    }
    return [];
  }
  
  
  function twoPair(cards) {
    var used = [], matches = [];
    for (let i in cards) {
      if (!used.includes(cards[i].rank)) {
        used.push(cards[i].rank);
        var arr = [...cards].filter(card => card.rank == cards[i].rank);
        if (arr.length >= 2) { matches.push([arr[0], arr[1]]); }
      }
    }
    matches = matches.sort((a,b) => a[0] - b[0]);
    while (matches.length > 2) {
      matches.shift();
    }
    if (matches.length >= 2) { return addRemainingCards([matches[0][0], matches[1][0]].sort((a,b) => getRank(b) - getRank(a)).map(ele => ele.rank), cards, 1); }
    return [];
  }
  
  function pair(cards) {
    for (let i in cards) {
      var arr = [...cards].filter(card => card.rank == cards[i].rank);
      if (arr.length == 2) { return addRemainingCards([arr[0]].map(ele => ele.rank), cards, 3); }
    }
    return [];
  }