// poker(hands) => best hand
const { max } = require('./util')

// # -----------
// # User Instructions
// #
// # Modify the hand_rank function so that it returns the
// # correct output for the remaining hand types, which are:
// # full house, flush, straight, three of a kind, two pair,
// # pair, and high card hands.
// #
// # Do this by completing each return statement below.
// #
// # You may assume the following behavior of each function:
// #
// # straight(ranks): returns True if the hand is a straight.
// # flush(hand): returns True if the hand is a flush.
// # kind(n, ranks): returns the first rank that the hand has
// #                  exactly n of.For A hand with 4 sevens
// #                  this function would return 7.
// # two_pair(ranks): if there is a two pair, this function
// #                  returns their corresponding ranks as a
// #                  tuple.For example, a hand with 2 twos
// #                  and 2 fours would cause this function
// #                  to return (4, 2).
// # card_ranks(hand) returns an ORDERED tuple of the ranks
// #                  in a hand(where the order goes from
//   #                  highest to lowest rank).
// #
// # Since we are assuming that some functions are already
// # written, this code will not RUN.Clicking SUBMIT will
// # tell you if you are correct.

function poker(hands) {
  return max(hands, handRank)
}

function straight(ranks) {
  return (ranks[0] + ranks[4]) / 2 === ranks[2] && (ranks[1] + ranks[3]) / 2 === ranks[2]
}
function kind(n, ranks) {

}

function cardRank(card) {
  // if (i == 'T')
  //   return 10;
  // else if (i == 'J')
  //   return 11;
  // else if (i == 'Q')
  //   return 12;
  // else if (i == 'K')
  //   return 13;
  // else if (i == 'A')
  //   return 14;
  // else
  //   return parseInt(i);

  return '--23456789TJQKA'.indexOf(card.split('')[0]);


}

function cardRanks(hand) {
  return hand.map((card) => cardRank(card)).sort((a, b) => b - a)
}


function cardSuit(card) {
  return card.split('')[1];
}

function flush(hand) {
  const firstsSuit = cardSuit(hand[0])
  return firstsSuit == hand.reduce((a, b) => a == cardSuit(b) ? a : false, firstsSuit);
}

function two_pair(ranks) {

}

function handRank(hand) {
  console.log(hand)
  const ranks = cardRanks(hand)
  if (straight(ranks) && flush(hand))            //# straight flush
    return [8, max(ranks)]
  else if (kind(4, ranks))                           //# 4 of a kind
    return [7, kind(4, ranks), kind(1, ranks)]
  else if (kind(3, ranks) && kind(2, ranks))        //# full house
    return [6, kind(3, ranks), kind(2, ranks)]
  else if (flush(hand))                              //# flush
    return [5, ranks]
  else if (straight(ranks))                          //# straight
    return [4, max(ranks)]
  else if (kind(3, ranks))                           //# 3 of a kind
    return [3, kind(3, ranks), kind(1, ranks)]
  else if (two_pair(ranks))                          //# 2 pair
    return [2, two_pair(ranks), kind(1, ranks)]
  else if (kind(2, ranks))                           //# kind
    return [1, kind(2, ranks), ranks]
  else                                          //# high card
    return [0, ranks]
}


exports.poker = poker
exports.cardRanks = cardRanks
exports.flush = flush;
exports.straight = straight;

