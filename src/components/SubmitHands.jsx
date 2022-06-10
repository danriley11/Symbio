import React from 'react';

import cardNumber from '../resources/cardNumber.json';
import winConditions from './winConditions';

export default function submitHands(player1State, player2State) {
  const player1Hand = player1State.split(' ');
  const player1ValuedHand = [];
  for (let i = 0; i < player1Hand.length; i++) {
    const cardDetails = player1Hand[i].split('');
    const cardValue = cardDetails[0];
    player1ValuedHand.push(cardNumber[cardValue]);
    // console.log(i, cardValue, player1ValuedHand);
  }

  const player2Hand = player2State.split(' ');
  const player2ValuedHand = [];
  for (let i = 0; i < player1Hand.length; i++) {
    const cardDetails = player2Hand[i].split('');
    const cardValue = cardDetails[0];
    player2ValuedHand.push(cardNumber[cardValue]);
    // console.log(i, cardValue, cardNumber[cardValue]);
  }

  // sort cards by values, highest to lowest
  player1ValuedHand.sort((a, b) => b - a);
  player2ValuedHand.sort((a, b) => b - a);

  console.log(player1Hand, player1ValuedHand);
  console.log(player2Hand, player2ValuedHand);

  //identify which player wins based on highCard
  const winner = winConditions(player1ValuedHand, player1ValuedHand);

  return <div>Player {winner} is the winner!</div>;
}
