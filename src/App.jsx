

import React, { useState } from 'react';

function App() {  
  const [number, setNumber] = useState(0); 
  
  const generate = () => {
    const random = Math.floor(Math.random() * 101); 
    setNumber(random);
  };
  
  return (
   <div style={{ padding: '30px' }}>
    
      <h1>{number}</h1>     
      
      <button onClick={generate}>Случайное число</button>
    </div>
  );
}
export default App;