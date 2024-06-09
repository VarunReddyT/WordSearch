import React, { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [selectedLevel, setSelectedLevel] = useState(() => {
    const savedLevel = localStorage.getItem('selectedLevel');
    return savedLevel ? JSON.parse(savedLevel) : null;
  });

//   const [timer, setTimer] = useState(() => {
//     const savedTimer = localStorage.getItem('timer');
//     return savedTimer ? JSON.parse(savedTimer) : 0;
//   });

  useEffect(() => {
    localStorage.setItem('selectedLevel', JSON.stringify(selectedLevel));
  }, [selectedLevel]);

//   useEffect(() => {
//     localStorage.setItem('timer', JSON.stringify(timer));
//   }, [timer]);

  return (
    <GameContext.Provider value={{ selectedLevel, setSelectedLevel}}>
      {children}
    </GameContext.Provider>
  );
};
    