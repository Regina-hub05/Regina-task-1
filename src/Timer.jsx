

import React, { useState } from 'react';


function Timer() {
 
  

    const [list, setList] = useState([]);
 

  return (
    <div>
    <div>
      <button>Now</button>
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