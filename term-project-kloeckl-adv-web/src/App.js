/*
*
* Name: Matt Kloeckl
* Class: SPRING 100 CSC 435 Adv Web App Development
* Professor: James Tucker
* Assignment: Week 1 Assignment: Environment Setup
* Date: March 19th, 2023
* 
*
*/

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello my name is Matt Kloeckl
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
