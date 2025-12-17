

import React, { useState } from 'react';
function App() {
  const colors = ['red', 'green', 'blue']; 
  
  const [colorIndex, setColorIndex] = useState(0); 

  const changeColor = () => {    
    let nextIndex = colorIndex + 1;   
    
    if (nextIndex > 2) {
      nextIndex = 0;
    }
     setColorIndex(nextIndex);
  };
  
  return (
    <div style={{ padding: '50px' }}>
      
      <div style={{
        width: '200px',
        height: '200px',
        background: colors[colorIndex],
        marginBottom: '20px'
      }}></div>
      
      
      <button onClick={changeColor}>Сменить цвет</button>
    </div>
  );
}
export default App;