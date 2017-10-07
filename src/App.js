import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./header";
import Footer from "./footer";
import Body from "./body";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
        {/* <Second/> */}

      </div>
    );
  }
}


export default App;
