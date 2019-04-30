function cakes(recipe, available) {
    // TODO: insert code
    var amounts = [];
    for (let key in recipe) {
      var amount = available[key] >= 0 ? Math.floor(available[key] / recipe[key]) : 0;
      amounts.push(amount);
    }
    return amounts.sort((a,b) => a - b)[0];
  }