import { useState } from 'react';

const ColorButton = (): JSX.Element => {
  const [color, setColor] = useState('red');
  const newButtonColor = color === 'red' ? 'blue' : 'red';
  return (
    <button
      style={{
        backgroundColor: color,
      }}
      onClick={() => setColor(newButtonColor)}
    >
      Change to {newButtonColor}
    </button>
  );
};

export default ColorButton;
