import React, { useState } from 'react';
import Score from './game/Score';
import Cards from './game/Cards';
import Agents from './game/agents';

const Main = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(Agents);

  const handleScore = (card, index) => {
    if (card.isMarked) {
      console.log('game ovah');
      return;
    }

    setScore(score + 1);

    const newCards = [...cards];
    newCards[index] = { ...newCards[index], isMarked: true };
    setCards(newCards);

    // else go out of function and end the game
    // check handle highscore function
    // handle reset function

    // shuffle content of array

    // to mark the card
    // pass the card as a parameter
    // map thru array in this component, if name matches then
    // mark the card
  };

  const handleHighScore = () => {
    // set to score if score is higher than highscore

    setHighScore(score);
  };

  const handleReset = () => {
    setScore(0);
    setCards([]);
  };

  return (
    <div className="game-container">
      <Score score={score} bestScore={highScore} />
      <Cards cards={cards} handleScore={handleScore} />
    </div>
  );
};

export default Main;
