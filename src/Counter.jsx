import React from 'react';
import { useState, useEffect } from 'react';
import './Counter.css'

const Counter = (props) => {
    const [counter, setCounter] = useState(props.startVal);
    return (
        <>
        <div class="counterContainer">
          <div class="counter">
            <div class="buttonContainer">
              <button class="counterButton" 
                onClick={() => { 
                    if (counter - props.decrementVal >= 0) {
                      setCounter(counter - props.decrementVal)
                    }
                }}>-</button>
            </div>
            <h1 class="counterValue">{counter}</h1>
            <div class="buttonContainer">
              <button class="counterButton" onClick={() => { setCounter(counter + props.incrementVal)} }>+</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Counter;

