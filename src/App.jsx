import { useState } from 'react';
import Another from './Another';
import logo from './logo.svg';
import './App.css';



function App() {
  const [count, setCount] = useState(0);

  function decrement(){
    setCount(prevCount => prevCount - 1);
  }
  
  function increment(){
    setCount(prevCount => prevCount +1);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Another name="Daniel" />
        <div>
          <span>{count}</span>
          <button onclick={decrement}>-</button>
          <button onclick={increment}>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
