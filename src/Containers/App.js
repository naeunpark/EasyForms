import React, { Component } from 'react';
import './App.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from './About.js'; 
import Support from './Support.js'; 

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Support />
        <Footer />
      </div>
    )
  }
}

export default App;
