import React, { useState } from 'react';
import Score from './game/Score';
import Cards from './game/Cards';

const Main = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [markedCards, addCard] = useState([]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  const handleHighScore = (currentScore) => {
    setHighScore((prevHighScore) => {
      return currentScore > prevHighScore ? currentScore : prevHighScore;
    });
  };

  const handleGameFlow = (card) => {
    if (markedCards.includes(card)) {
      handleHighScore(score);
      handleReset();
      return;
    }
    addCard([...markedCards, card]);
    handleScore();
  };

  const handleReset = () => {
    setScore(0);
    addCard([]);
  };

  return (
    <div className="game-container">
      <Score score={score} bestScore={highScore} />
      <Cards
        score={score}
        bestScore={highScore}
        handleGameFlow={handleGameFlow}
      />
    </div>
  );
};

export default Main;
