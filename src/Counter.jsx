import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCount = (num) =>{
        const newCount = count+num;
        setCount(newCount);
    }

  return (
    <div>
        {
            count>=50 && <p>That's a half century</p>
        }
        {
            count>=100 && <p>That's a century</p>
        }
        <h3>Count : {count} </h3>
        <button onClick={() => handleCount((1))} >Click to add 1</button>
        <button onClick={() => handleCount((4))} >Click to add 4</button>
        <button onClick={() => handleCount((6))} >Click to add 6</button>
        <button onClick={() => handleCount((2))} >Click to add 2</button>
    </div>
  )
}
