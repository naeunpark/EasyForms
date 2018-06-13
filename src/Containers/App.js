import React, { Component } from 'react';
import './App.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App;
