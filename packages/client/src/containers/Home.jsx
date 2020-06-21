import React from 'react';
import Button from 'react-bootstrap/Button';

import logo from 'assets/images/logo.svg';
import 'assets/stylesheets/App.css';

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
        <Button href='/create-class' className="mr-2" variant="primary" size="lg">Start a class</Button>
        <Button href='/join-class/5eef5a59bb2fd01577e2a70e' className="ml-2" variant="dark" size="lg">Join a class</Button>
      </div>
    </div>
  )
}
