

import React, { useState } from 'react';

function App() {
  const emojis = ['😀', '😐', '😢']; 
  
  const [emojiIndex, setEmojiIndex] = useState(0);   
  const changeEmoji = () => {    
    let nextIndex = emojiIndex + 1;   
    
    if (nextIndex > 2) {
      nextIndex = 0;
       }
    
    setEmojiIndex(nextIndex);
  };
  
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
    
      <div style={{ fontSize: '100px', marginBottom: '30px' }}>
        {emojis[emojiIndex]}
      </div>     
    
      <button onClick={changeEmoji}>Сменить настроение</button>
    </div>
  );
}

export default App;