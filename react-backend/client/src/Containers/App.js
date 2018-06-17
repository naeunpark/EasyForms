import React, { Component } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Routes from './Routes';

  class App extends Component {

    render() {
      return (
        <div className="App">
          <Header />
            <Routes />
          <Footer />
        </div>
      );
    }
  }

export default App;