import React, { Component } from 'react';
//import mysql from 'mysql'
//import express from 'express';
//import bodyParser from 'body-parser'
import './App.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Main from './Main';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
//import App from '../../Containers/App';
import About from './About';
import Contact from './Contact';



  class App extends Component {
  
    state = { api: [] }
  
    componentDidMount() {
      fetch('/api/')
        .then(res => res.json())
        .then(api => this.setState({ api }));
    }
  
    render() {
      return (
        <div className="App">
          <Header />
          {/* <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Switch> */}
          {/* <h1>Users</h1>
          <ul>
            {this.state.api.map(user =>
              <li key={user.id}>{user.username}</li>
            )}
          </ul> */}
          <Main />
          <Footer />
        </div>
      );
    }
  }

export default App;