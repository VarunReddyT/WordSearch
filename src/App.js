import React from 'react';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './Components/GameContext.js';
import './Components/styles.css'
import GamePage from './Components/GamePage';
import EndPage from './Components/EndPage';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;

// "gameTitle": "Word Match for Dyslexic Learners",
// "description": "A fun game to help dyslexic children recognize spoken words and complete sentences correctly.",
// "instructions": "Listen to the word and select the correct option to complete the sentence.",