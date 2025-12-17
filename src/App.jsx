

import React, { useState } from 'react';

function App() {  
  const [count, setCount] = useState(0);  
  
  const [inputValue, setInputValue] = useState('1');  
  
  const add = () => {
    const num = Number(inputValue);
    setCount(count + num);
  };  
  
  const subtract = () => {
    const num = Number(inputValue); 
    setCount(count - num);
  };
   return (
    <div style={{ padding: '30px' }}>
      
      <h1>{count}</h1>     
    
      <button onClick={add} style={{ marginRight: '10px' }}>+</button>
      <button onClick={subtract} style={{ marginRight: '10px' }}>-</button>      
      
      <input 
        type="number" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}
export default App;