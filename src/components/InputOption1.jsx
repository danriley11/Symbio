import React, { useState } from 'react';

import submitHands from './SubmitHands';

export default function UserInput() {
  const [player1State, setPlayer1State] = useState('9H 9S TD 6D 6S');
  const [player2State, setPlayer2State] = useState('8H 8S 8C 5C 7D');
  const [winner, setWinner] = useState('');

  const handlePlayer1Change = (e) => {
    setPlayer1State(e.target.value);
    console.log(e.target.value);
  };
  const handlePlayer2Change = (e) => {
    setPlayer2State(e.target.value);
  };

  const handleChange = () => {
    const outcome = submitHands(player1State, player2State, winner);
    console.log(outcome);
    setWinner(outcome);
  };

  return (
    <>
      And the winner is...! <br />
      <b>{winner}</b>
      <div>
        <input
          id="player1"
          placeholder={player1State}
          maxLength={14}
          onChange={(e) => handlePlayer1Change(e)}></input>
        <input
          id="player2"
          placeholder={player2State}
          maxLength={14}
          onChange={(e) => handlePlayer2Change(e)}></input>
      </div>
      <input
        type="button"
        value="Submit Options"
        onMouseDown={() => submitHands(player1State, player2State, winner)}
        onMouseUp={() => handleChange()}></input>
    </>
  );
}
