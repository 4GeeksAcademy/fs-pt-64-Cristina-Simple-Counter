import React from 'react';

const SecondsCounter = ({ seconds }) => {
  return (
    <div className="seconds-counter">
      <h1>Seconds Counter:</h1>
      <p>{seconds} segundos</p>
    </div>
  );
};

export default SecondsCounter;
