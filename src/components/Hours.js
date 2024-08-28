// Placeholder to host a component
import React from 'react';

const Hours = () => {
  const date = new Date();
  const hours = date.getHours();

  return (
    <div>
      <h2>Hora actual del día:</h2>
      <p>{hours}:00</p>
    </div>
  );
};

export default Hours;
