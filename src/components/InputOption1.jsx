import React, { useState } from 'react';

import submitHands from './SubmitHands';

export default function UserInput() {
  const [player1State, setPlayer1State] = useState('9H 8S TD AD 7S');
  const [player2State, setPlayer2State] = useState('4H JS 3C TC 8D');

  const handlePlayer1Change = (e) => {
    setPlayer1State(e.target.value);
    console.log(e.target.value);
  };
  const handlePlayer2Change = (e) => {
    setPlayer2State(e.target.value);
  };

  return (
    <>
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
        onClick={() => submitHands(player1State, player2State)}></input>
    </>
  );
}
