/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var currentHand = 0;
  let ace = false;


  for( i = 0; i < hand.length; i++){
    if( hand[i] === "K" || hand[i] === "Q" || hand[i] === "J"){
      hand[i] = 10
    }
     if( hand[i] === "A") {
      hand[i] = 11
      ace = true;
       if (currentHand > 10) {
        hand[i] = 1
      }
    }
currentHand += Number(hand[i])

if(ace = true && currentHand > 21){
  currentHand = currentHand - 10
}



  }


  return currentHand;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
