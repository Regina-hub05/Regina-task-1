

import React, { useState } from 'react';

function App() {
  
  const fruits = ["яблоко", "груша", "банан", "киви"];
  
  
  const [word, setWord] = useState('');
  
  
  const randomWord = () => {
    const randomNumber = Math.floor(Math.random() * 4); 
    setWord(fruits[randomNumber]); 
  };
  
  return (
    <div style={{ padding: '30px' }}>
    
      <h1>{word}</h1>
       <button onClick={randomWord}>Случайный фрукт</button>
    </div>
  );
}

export default App;