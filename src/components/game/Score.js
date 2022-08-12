import React from 'react';

const Score = ({ score, bestScore }) => {
  return (
    <div className="score-container">
      <div className="score">Score: {score}</div>
      <div className="score">High Score: {bestScore}</div>
    </div>
  );
};

export default Score;
