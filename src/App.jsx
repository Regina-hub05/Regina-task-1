

import React, { useState } from 'react';

function App() {  
  const [history, setHistory] = useState([]); 
  
  const addPlus = () => {
    setHistory([...history, '+1']);
  };
   
  const addMinus = () => {
    setHistory([...history, '-1']);
  };
  
  return (
    <div style={{ padding: '30px' }}>
    
      <button onClick={addPlus} style={{ marginRight: '10px' }}>+</button>
      <button onClick={addMinus}>-</button>
       <div style={{ marginTop: '20px' }}>
        {history.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;