import React from 'react';
import Button from 'react-bootstrap/Button';

import logo from '../logo.svg';
import '../App.css';

export const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Mulu Fit React Client
        </p>
      </header>
      <div className="row mt-5 w-100 justify-content-center">
        <Button className="mr-2" variant="primary" size="lg">Start a class</Button>
        <Button className="ml-2" variant="dark" size="lg">Join a class</Button>
      </div>
    </div>
  )
}
