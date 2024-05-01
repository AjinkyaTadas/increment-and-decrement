import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [number, setNumbers] = useState(0);

  const incrementNumber = () => {
    setNumbers(number + 1);
  }

  const decrementNumber = () => {
    if (number > 0) {
      setNumbers(number - 1);
    } else {
      setNumbers(0);
      alert("you have reached your limits")
    }
  }

  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1 className="text-dark">{number}</h1>
          <button className="btn btn-warning mx-3 my-3" onClick={incrementNumber}>Increment</button>
          <button className="btn btn-danger" onClick={decrementNumber}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
