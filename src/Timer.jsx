

import React, { useState } from 'react';


function Timer() {
 
  

    const [list, setList] = useState([]);
     const handleClick = () => {
      const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    setList([...list, time]);
  };
 

  return (
    <div>
       <button onClick={handleClick}>Now</button>
    <div>
     
    </div>

    

    <ul>
      {list.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
    </div>
  );
}


function getFormattedTime() {
    const nowDate = new Date();

    return `${nowDate.getHours()} + ${nowDate.getMinutes()} + ${nowDate.getSeconds()}`;
  }

export default Timer;