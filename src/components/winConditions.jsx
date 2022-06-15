import { useState } from 'react';

export default function WinConditions(player1ValuedHand, player2ValuedHand, winner) {
  console.log(player1ValuedHand);
  console.log(player2ValuedHand);
  console.log(winner);
  let kicker = 0;
  //logic for validating input:

  //logic for wins:
  // win based on royalFlush:
  const royalFlush = () => {};
  // win based on straightFlush:
  const straightFlush = () => {};
  // win based on fourOfAKind:
  const fourOfAKind = () => {
    for (let index = 0; index < player1ValuedHand.length; index++) {
      if (
        player1ValuedHand[index] === player1ValuedHand[index + 1] &&
        player1ValuedHand[index] === player1ValuedHand[index + 2] &&
        player1ValuedHand[index] === player1ValuedHand[index + 3] &&
        player2ValuedHand[index] === player2ValuedHand[index + 1] &&
        player2ValuedHand[index] === player2ValuedHand[index + 2] &&
        player2ValuedHand[index] === player2ValuedHand[index + 3]
      ) {
        //check who has higher triple
        if (player1ValuedHand[index] > player2ValuedHand[index]) {
          winner = 'Player 1';
        } else if (player2ValuedHand[index] > player1ValuedHand[index]) {
          winner = 'Player 2';
        } else if (player1ValuedHand[index] === player2ValuedHand[index]) {
          highCard();
        }
      } else if (
        player1ValuedHand[index] === player1ValuedHand[index + 1] &&
        player1ValuedHand[index] === player1ValuedHand[index + 2] &&
        player1ValuedHand[index] === player1ValuedHand[index + 3]
      ) {
        console.log('Player1 has Four of a Kind!');
        winner = 'Player 1';
        return true;
      } else if (
        player2ValuedHand[index] === player2ValuedHand[index + 1] &&
        player2ValuedHand[index] === player2ValuedHand[index + 2] &&
        player2ValuedHand[index] === player2ValuedHand[index + 3]
      ) {
        console.log('Player2 has Four of a Kind!');
        winner = 'Player 2';
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
        player1ValuedHand[index] === player1ValuedHand[index + 2] &&
        player2ValuedHand[index] === player2ValuedHand[index] &&
        player2ValuedHand[index] === player2ValuedHand[index + 1] &&
        player2ValuedHand[index] === player2ValuedHand[index + 2]
      ) {
        //check who has higher triple
        if (player1ValuedHand[index] > player2ValuedHand[index]) {
          winner = 'Player 1';
        } else if (player2ValuedHand[index] > player1ValuedHand[index]) {
          winner = 'Player 2';
        } else if (player1ValuedHand[index] === player2ValuedHand[index]) {
          highCard();
        }
      } else if (
        player1ValuedHand[index] === player1ValuedHand[index] &&
        player1ValuedHand[index] === player1ValuedHand[index + 1] &&
        player1ValuedHand[index] === player1ValuedHand[index + 2]
      ) {
        console.log('Player1 has a Triple!');
        winner = 'Player 1';
        return true;
      } else if (
        player2ValuedHand[index] === player2ValuedHand[index] &&
        player2ValuedHand[index] === player2ValuedHand[index + 1] &&
        player2ValuedHand[index] === player2ValuedHand[index + 2]
      ) {
        console.log('Player2 has a Triple!');
        winner = 'Player 2';
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
      console.log(index);
      if (
        player1ValuedHand[index] === player1ValuedHand[index + 1] &&
        player2ValuedHand[index] === player2ValuedHand[index + 1]
      ) {
        //check who has higher pair
        console.log('check who has higher pair');
        if (player1ValuedHand[index] > player2ValuedHand[index]) {
          winner = 'Player 1';
          return true;
        } else if (player2ValuedHand[index] > player1ValuedHand[index]) {
          winner = 'Player 2';
          return true;
        } else if (player1ValuedHand[index] === player2ValuedHand[index]) {
          highCard();
        }
      } else if (player1ValuedHand[index] === player1ValuedHand[index + 1]) {
        console.log('Player1 has a Pair!');
        winner = 'Player 1';
        return true;
      } else if (player2ValuedHand[index] === player2ValuedHand[index + 1]) {
        console.log('Player2 has a Pair!');
        winner = 'Player 2';
        return true;
      } else {
        console.log('skipped2');
      }
    }
  };
  // win based on high card:
  const highCard = (kicker) => {
    for (let index = kicker || 0; index <= player1ValuedHand.length; index++) {
      if (index === 5) {
        winner = "It's a tie!";
        return true;
      } else if (player1ValuedHand[index] === player2ValuedHand[index]) {
        console.log('tied');
      } else if (player1ValuedHand[index] > player2ValuedHand[index]) {
        winner = 'Player 1';
        return true;
      } else if (player2ValuedHand[index] > player1ValuedHand[index]) {
        winner = 'Player 2';
        return true;
      } else {
        return false;
      }
    }
  };

  //check who wins:
  if (fourOfAKind() === true) {
    console.log(`Four Of A Kind was the win condition!`);
  } else if (straight() === true) {
    console.log(`Straight was the win condition!`);
  } else if (triple() === true) {
    console.log(`Triple was the win condition!`);
  } else if (pair() === true) {
    console.log(`Pair was the win condition!`);
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
