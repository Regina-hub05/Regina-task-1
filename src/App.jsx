

import React, { useState } from 'react';

function App() {
  
  const [isOn, setIsOn] = useState(false);
  
  
  const toggle = () => {
    setIsOn(!isOn);
  };
  
  return (
    <div>
      
      <h1>{isOn ? "Свет включен" : "Свет выключен"}</h1>
      
     
      <button onClick={toggle}>Вкл/Выкл</button>
    </div>
  );
}
export default App;