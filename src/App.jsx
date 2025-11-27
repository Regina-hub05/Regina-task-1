
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <span style={{ margin: '0 20px', fontSize: '24px' }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Counter;