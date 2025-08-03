import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = (event) => {
    alert("I was clicked");
  };

  return (
    <div style={{ margin: '20px' }}>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button><br /><br />
      <button onClick={decrement}>Decrement</button><br /><br />
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button><br /><br />
      <button onClick={handleClick}>Click on me</button><br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
