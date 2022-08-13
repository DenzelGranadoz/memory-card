import React from 'react';

const CardItem = ({ card, handleScore, index }) => {
  return (
    <button className="card" onClick={() => handleScore(card, index)}>
      <img src={card.image} alt={card.name}></img>
      <h3>{card.name}</h3>
    </button>
  );
};

export default CardItem;
