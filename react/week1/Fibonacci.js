import React, { useState } from 'react';

export function Fibonacci () {
    
    const [counterState, setCounterState] = useState([0, 1]);
    const increment =()=>{  
       setCounterState( (prevNum) => 
        {
            let value;
            value = prevNum[prevNum.length-1] + prevNum[prevNum.length-2];
           return [...prevNum, value];
       });
    }

    return (
        <div>
            { counterState.map(counter => <div>{counter}</div>) }
            <button onClick={increment}>Increment</button>
        </div>
    );  
}