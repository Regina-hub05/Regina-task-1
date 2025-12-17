

import React, { useState } from 'react';

function App() {  
  const [color, setColor] = useState('red');
  
  return (
    <div style={{ padding: '30px' }}>
          <div style={{
        width: '200px',
        height: '200px',
        background: color,
        marginBottom: '20px'
      }}></div>     
      
      <button onClick={() => setColor('red')} style={{ marginRight: '10px' }}>red</button>
      <button onClick={() => setColor('green')} style={{ marginRight: '10px' }}>green</button>
      <button onClick={() => setColor('blue')}>blue</button>
    </div>
     );
}
export default App;