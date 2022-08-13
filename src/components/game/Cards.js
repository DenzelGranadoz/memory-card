import React from 'react';
import CardItem from './CardItem';

const Cards = ({ cards, handleScore }) => {
  return (
    <div className="cards-container">
      {cards.map((card, i) => (
        <CardItem
          key={card.name}
          card={card}
          handleScore={handleScore}
          index={i}
        />
      ))}
    </div>
  );
};

export default Cards;
