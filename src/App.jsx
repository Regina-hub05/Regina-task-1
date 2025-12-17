

import React, { useState } from 'react';
function App() {  
  const [items, setItems] = useState([]); 
  
  const [counter, setCounter] = useState(1); 
  
  const addItem = () => {
    setItems([...items, `Элемент ${counter}`]);
    setCounter(counter + 1);
  }; 
  
  const clearList = () => {
    setItems([]);
    setCounter(1);
  };
  return (
    <div style={{ padding: '30px' }}>    
      <button onClick={addItem} style={{ marginRight: '10px' }}>
        Добавить элемент
      </button>
      <button onClick={clearList}>
        Очистить список
      </button>     
      
      <ul style={{ marginTop: '20px' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;