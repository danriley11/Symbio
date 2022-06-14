import React, { useState } from 'react';

import submitHands from './SubmitHands';
import WinConditions from './winConditions';

export default function UserInput() {
  const [player1State, setPlayer1State] = useState('9H 8S TD AD 7S');
  const [player2State, setPlayer2State] = useState('4H JS 3C TC 8D');
  const [winner, setWinner] = useState('');

  const handlePlayer1Change = (e) => {
    setPlayer1State(e.target.value);
    console.log(e.target.value);
  };
  const handlePlayer2Change = (e) => {
    setPlayer2State(e.target.value);
  };

  // const handleWinnerChange = () => {
  //   setWinner(newWinner);
  //   console.log(newWinner);
  // };

  return (
    <>
      And the winner is...! <br />
      <WinConditions />
      <div>
        <input
          id="player1"
          placeholder="AH 9S 4D TD 8S"
          maxLength={14}
          onChange={(e) => handlePlayer1Change(e)}></input>
        <input
          id="player2"
          placeholder="4H JS 3C TC 8D"
          maxLength={14}
          onChange={(e) => handlePlayer2Change(e)}></input>
      </div>
      <input
        type="button"
        value="Submit Options"
        onClick={() => submitHands(player1State, player2State, winner)}></input>
    </>
  );
}
