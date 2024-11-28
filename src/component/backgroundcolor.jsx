import React from 'react';

const BackgroundColor = () => {
  const changeBackgroundColor = () => {
    
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <button onClick={changeBackgroundColor}>Change Background Color</button>
  );
}

export default BackgroundColor;
