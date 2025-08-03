import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [helloMessage, setHelloMessage] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [clickMessage, setClickMessage] = useState('');

  // Increment with multiple actions
  const handleIncrement = () => {
    setCount(count + 1);
    setHelloMessage("Hello, welcome to the counter app!");
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleWelcome = () => {
    setWelcomeMessage("Welcome to React Event Handling!");
  };

  const handleClickMe = (event) => {
    setClickMessage("I was clicked");
  };

  return (
    <div className="App">
      <h1>React Event Handling Examples</h1>

      <h2>Counter Value: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>{helloMessage}</p>

      <hr />

      <button onClick={handleWelcome}>Say Welcome</button>
      <p>{welcomeMessage}</p>

      <hr />

      <button onClick={handleClickMe}>Click Me</button>
      <p>{clickMessage}</p>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
