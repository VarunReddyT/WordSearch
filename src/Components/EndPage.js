import React from 'react'
import { GameContext } from './GameContext.js'
import { useContext } from 'react'
export default function EndPage() {

  const { selectedLevel } = useContext(GameContext);
  const WordTries = localStorage.getItem('WordTries');
  const TimeTaken = localStorage.getItem('TimeTaken');
  return (
    <div>
      <div className='text-center mt-4'>
        <div>
          <h1>Word Match</h1>
          <h2>Level {selectedLevel}</h2>
        </div>
      </div>
      <div className='container mt-5 game'>
        <div className='sentence mt-4 text-center'>
          <h3>Game Over</h3>
          <h3>Word Tries: {WordTries}</h3>
          <h3>Time Taken: {TimeTaken} seconds</h3>
        </div>
      </div>
    </div>
  )
}
