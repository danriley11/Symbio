export default function winConditions(player1ValuedHand, player2ValuedHand) {
  const winningPlayer = 0;
  const winner = '';
  console.log(player1ValuedHand.length);
  console.log(player2ValuedHand.length);

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
  const highCard = () => {
    if (player1ValuedHand[0] > player2ValuedHand[0]) {
      return true, (winner += 'Player 1');
    } else {
      return true, (winner += 'Player 2');
    }
  };

  //check who wins:
  if (fourOfAKind() === true) {
    console.log(`Four Of A Kind was the win condition`);
  } else if (straight() === true) {
    console.log(`Straight was the win condition`);
  } else if (triple() === true) {
    console.log(`Triple was the win condition`);
  } else if (pair() === true) {
    console.log(`Pair was the win condition`);
  } else if (highCard === true) {
    console.log(`High Card was the win condition`);
  } else {
    console.log(winner);
  }
  //   return winningPlayer;
}
