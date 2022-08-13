import React from 'react';

const CardItem = ({ card, handleGameFlow }) => {
  return (
    <button className="card" onClick={() => handleGameFlow(card)}>
      <img src={card.image} alt={card.name}></img>
      <h3>{card.name}</h3>
    </button>
  );
};

export default CardItem;
