import { useState } from 'react';

export default function WinConditions(player1ValuedHand, player2ValuedHand, winner) {
  // console.log(player1ValuedHand.length);
  // console.log(player2ValuedHand.length);

  //logic for wins:
  // win based on royalFlush:
  const royalFlush = () => {};
  // win based on straightFlush:
  const straightFlush = () => {};
  // win based on fourOfAKind:
  const fourOfAKind = (answer) => {
    for (let index = 0; index < player1ValuedHand.length; index++) {
      if (
        player1ValuedHand[index] === player1ValuedHand[index + 1] &&
        player1ValuedHand[index] === player1ValuedHand[index + 2] &&
        player1ValuedHand[index] === player1ValuedHand[index + 3]
      ) {
        return true;
      } else {
        console.log('skipped4');
      }
    }
  };
  // win based on fullHouse:
  const fullHouse = () => {};
  // win based on flush:
  const flush = () => {};
  // win based on straight:
  const straight = () => {
    for (let index = 0; index < 5; index++) {
      if (
        // player1ValuedHand[index] === player1ValuedHand[index]
        player1ValuedHand[index] === player1ValuedHand[index] &&
        player1ValuedHand[index + 1] === player1ValuedHand[index] - 1 &&
        player1ValuedHand[index + 2] === player1ValuedHand[index] - 2 &&
        player1ValuedHand[index + 3] === player1ValuedHand[index] - 3 &&
        player1ValuedHand[index + 4] === player1ValuedHand[index] - 4
      ) {
        return true;
      } else {
        return console.log('skippedS');
      }
    }
  };
  // win based on Triple:
  const triple = () => {
    for (let index = 0; index < player1ValuedHand.length; index++) {
      if (
        player1ValuedHand[index] === player1ValuedHand[index] &&
        player1ValuedHand[index] === player1ValuedHand[index + 1] &&
        player1ValuedHand[index] === player1ValuedHand[index + 2]
      ) {
        return true;
      } else if (
        player2ValuedHand[index] === player2ValuedHand[index] &&
        player2ValuedHand[index] === player2ValuedHand[index + 1] &&
        player2ValuedHand[index] === player2ValuedHand[index + 2]
      ) {
        return true;
      } else {
        console.log('skipped3');
      }
    }
  };
  // win based on twoPair:
  const twoPair = () => {};
  // win based on pair:
  const pair = () => {
    for (let index = 0; index < player1ValuedHand.length; index++) {
      if (player1ValuedHand[index] === player1ValuedHand[index + 1]) {
        return true;
      } else {
        console.log('skipped2');
      }
    }
  };
  // win based on high card:
  const highCard = (e) => {
    if (player2ValuedHand[0] < player1ValuedHand[0]) {
      winner = 'Player 2';
      return true;
    } else {
      winner = 'Player 1';
      return true;
    }
  };

  //check who wins:
  if (fourOfAKind() === true) {
    alert(`Four Of A Kind was the win condition!`);
  } else if (straight() === true) {
    alert(`Straight was the win condition!`);
  } else if (triple() === true) {
    alert(`Triple was the win condition!`);
  } else if (pair() === true) {
    alert(`Pair was the win condition!`);
  } else if (highCard() === true) {
    console.log(winner);
    console.log(`High Card was the win condition!`);
    return winner;
  } else {
    console.log('Error: No win condition');
  }

  return (
    <>
      <h3>{winner}</h3>
    </>
  );
}
