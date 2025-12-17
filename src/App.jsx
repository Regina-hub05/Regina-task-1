

import React, { useState } from 'react';
function App() {  
  const [text, setText] = useState('Привет!'); 
  
  const changeText = () => {
    if (text === 'Привет!') {
      setText('Пока!');
    } else {
      setText('Привет!');
    }
  };  
  return (
    <div>    
      <h1>{text}</h1>
      <button onClick={changeText}>Изменить текст</button>
    </div>
  );
}
export default App;