import React, { useState } from 'react';
import Square from './Square';
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);

  };
  return (
    <div className='board-container'>
      {isWinner ? (
        <>{isWinner} won the game <button className='play-btn' onClick={() => setState(Array(9).fill(null))}>Play Again</button> </>
      ) : (
        <>
          
             <h4>Player {isXTurn ? 'X' : 'O'} please move</h4>
          <div className="board-row">
            <Square click={() => handleClick(0)} value={state[0]} />
            <Square click={() => handleClick(1)} value={state[1]} />
            <Square click={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square click={() => handleClick(3)} value={state[3]} />
            <Square click={() => handleClick(4)} value={state[4]} />
            <Square click={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square click={() => handleClick(6)} value={state[6]} />
            <Square click={() => handleClick(7)} value={state[7]} />
            <Square click={() => handleClick(8)} value={state[8]} />
          </div>
          <button className='reset-btn' onClick={()=>setState(Array(9).fill(null))}>Reset game</button>
          
        </>)}
        
    </div>
  );

};
export default Board;
