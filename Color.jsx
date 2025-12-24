import React, { useState } from 'react';

function ColorChange() {
  const [color, setColor] = useState('black');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: color }}>Hello Welcome to pumo!</h1>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={() => setColor('green')}>Green</button>
        <button onClick={() => setColor('blue')}>Blue</button>
      </div>
    </div>
  );
}

export default ColorChange;