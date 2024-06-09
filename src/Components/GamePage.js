import React, { useContext, useState, useEffect } from 'react';
import Sentences from '../sentences.json';
import { GameContext } from './GameContext.js';
import { useNavigate } from 'react-router-dom';
import ConfettiExplosion from 'react-confetti-explosion';


export default function GamePage() {
  const { selectedLevel } = useContext(GameContext);

  const levels = Sentences;
  const sentences = levels[selectedLevel].sentences;
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const sentence = sentences[currentSentenceIndex];
  const [updatedSentence, setUpdatedSentence] = useState('');
  const navigate = useNavigate();
  const [wordTries, setWordTries] = useState(1);
  // eslint-disable-next-line
  const [startTime, setStartTime] = useState(Date.now());
  const [selectedOption, setSelectedOption] = useState(null);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    setUpdatedSentence(sentence.sentence.replace(sentence.correctOption, '_____'));
  }, [sentence]);

  const handleOptionClick = async (option) => {
    setSelectedOption(option);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(option);
    await synth.speak(utterance);
    setWordTries((prev) => prev + 1);
    if (option === sentence.correctOption) {
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 1500);
      if ((selectedLevel === 1 && currentSentenceIndex === 2) ||
          (selectedLevel === 2 && currentSentenceIndex === 2) ||
          (selectedLevel === 3 && currentSentenceIndex === 3) ||
          (selectedLevel === 4 && currentSentenceIndex === 4) ||
          (selectedLevel === 5 && currentSentenceIndex === 4)) {
        const endTime = Date.now();
        const timeDiff = Math.round((endTime - startTime) / 1000);
        localStorage.setItem('WordTries', wordTries);
        localStorage.setItem('TimeTaken', timeDiff);
        navigate('/end');
      } else {
        setUpdatedSentence(updatedSentence.replace('_____', sentence.correctOption));
        setTimeout(() => {
          setCurrentSentenceIndex((prev) => prev + 1);
          setSelectedOption(null); // Reset selected option for next sentence
        }, 1500);
      }
    }
  };

  return (
    <div>
      <div className='text-center mt-4'>
        <div>
          <h1>Word Match</h1>
          <h2>Level {selectedLevel}</h2>
        </div>
      </div>
      <div className='container mt-5 game'>
        <div className='sentence mt-4'>
          <h3>{updatedSentence}</h3>
        </div>
        <div className='options mt-3'>
          {sentence.options.map((option, index) => (
            <button
              key={index}
              className={`btn btn-lg optionButton ${selectedOption === option ? (option === sentence.correctOption ? 'btn-success' : 'btn-danger') : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}

            </button>
          ))}
        </div>
        {confetti && <ConfettiExplosion force={0.2} duration={1500} />}
      </div>
    </div>
  );
}
