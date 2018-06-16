import React, { Component } from 'react';
import './App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from './About.js'; 

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Footer />
      </div>
    )
  }
}

export default App;
