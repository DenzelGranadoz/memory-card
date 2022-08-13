import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import Agents from './agents';

const Cards = ({ score, highScore, handleGameFlow }) => {
  const [cards, setCards] = useState(Agents);

  const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffleCards(newCards);
    setCards(newCards);
  }, [score, highScore]);

  return (
    <div className="cards-container">
      {cards.map((card, i) => (
        <CardItem key={card.name} card={card} handleGameFlow={handleGameFlow} />
      ))}
    </div>
  );
};

export default Cards;
