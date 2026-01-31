import React from 'react'

const GameHeader = ({score,moves}) => {
  return (
    <>
    <div className="header w-1/3 max-w mx-auto text-white bg-slate-800 mt-16 rounded-md p-4">
    <div className="game-header text-center">
        <h1 className='text-xl font-bold'>Memory Card Game</h1>
    </div>


    <div className="stat flex justify-evenly mt-2 font-bold">

    <div className="score">
        <div className="score-label">SCORE:</div>
        <div className="score-value text-center">{score}</div>
    </div>



    <div className="moves">
        <div className="moves-label">MOVES:</div>
        <div className="moves-value text-center">{moves}</div>
    </div>

    </div>

    <div className="button mt-2 border-2 rounded-md w-1/3 p-1 text-center ml-39 font-bold">
        <button>NEW GAME</button>
    </div>

    </div>
    </>
  )
}

export default GameHeader