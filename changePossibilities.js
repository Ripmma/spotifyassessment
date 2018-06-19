function changePossibilities(amount, coins) {
  var count = 0;
  var changer = function(numInd, val){
    var currentCoin = coins[numInd];
    if( numInd == 0){
      if( val % currentCoin == 0){
        count++;
      }
      return;
    }
    while( val >= 0 ){
      changer(numInd-1, val);
      val -= currentCoin;
    }
  }
  changer(coins.length-1, amount);
  return count;
};

changePossibilities(10, [1,2,3])