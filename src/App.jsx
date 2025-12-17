

import React, { useState } from 'react';

function App() {  
  const [plusCount, setPlusCount] = useState(0);
  const [minusCount, setMinusCount] = useState(0); 
  
  const handlePlus = () => {
    setPlusCount(plusCount + 1);
  }; 
  
  const handleMinus = () => {
    setMinusCount(minusCount + 1);
  };
  
  return (
    <div style={{ padding: '30px' }}>    
      <div>+ нажали: {plusCount}</div>
      <div>- нажали: {minusCount}</div>
       <button onClick={handlePlus} style={{ marginRight: '10px' }}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}

export default App;