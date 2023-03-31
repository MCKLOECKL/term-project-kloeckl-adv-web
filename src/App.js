/*
*
* Name: Matt Kloeckl
* Class: SPRING 100 CSC 435 Adv Web App Development
* Professor: James Tucker
* Assignment: Week 2 Assignment: Term Project Intro
* Date: March 30th, 2023
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
        <a target="_blank" href="https://icons8.com/icon/68312/department-shop">
          Department Shop</a> icon by 
          <a target="_blank" href="https://icons8.com">Icons8</a>
        <p>
          Welcome to CSP Store!
        </p>
      </header>
      <main>
        <a target="/containers/login.js">Login Page</a>
      </main>
    </div>
  );
}

export default App;
