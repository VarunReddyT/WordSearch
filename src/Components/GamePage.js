import React, { useContext, useState, useEffect } from 'react';
import Sentences from '../sentences.json';
import { GameContext } from './GameContext.js';
import { useNavigate } from 'react-router-dom';

export default function GamePage() {
  const { selectedLevel, setWordTries } = useContext(GameContext);

  const levels = Sentences;
  const sentences = levels[selectedLevel].sentences;
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const sentence = sentences[currentSentenceIndex];
  const [updatedSentence, setUpdatedSentence] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Update the sentence with underscores for correctOption
    setUpdatedSentence(sentence.sentence.replace(sentence.correctOption, '_____'));
  }, [sentence]);

  const handleOptionClick = async (option) => {
    console.log(option);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(option);
    await synth.speak(utterance);
    setWordTries((prev) => prev + 1);
    if (option === sentence.correctOption) {
      if((selectedLevel === 1 && currentSentenceIndex === 2) || (selectedLevel === 2 && currentSentenceIndex === 2) || (selectedLevel === 3 && currentSentenceIndex === 3) || (selectedLevel === 4 && currentSentenceIndex === 4) || (selectedLevel === 5 && currentSentenceIndex === 4)){
        navigate('/end');
      }
      else{
        setUpdatedSentence(updatedSentence.replace('_____', sentence.correctOption));
        setTimeout(() => {
          setCurrentSentenceIndex((prev) => prev + 1);
        }, 1500);
      }
    }
  }

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
            <button key={index} className='btn btn-lg optionButton' onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
