import React, { Component } from 'react';
//import mysql from 'mysql'
//import express from 'express';
//import bodyParser from 'body-parser'
import './App.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


  class About extends Component {
  
    // state = { api: [] }
  
    // componentDidMount() {
    //   fetch('/api/about')
    //     .then(res => res.json())
    //     .then(api => this.setState({ api }));
    // }
  
    render() {
      return (
        <div className="App">
          {/* <Header /> */}
          <h1>about</h1>
          <p>EasyForms is a 100% Kiwi owned and operated company which grew from one man’s passion for innovation and technology. Keith Archer wanted to create a company that would make a real difference to customers and their businesses. Not just one that said the right things, but that actually delivered.

In true Kiwi style, over a beer and brain storming session with a friend, Keith penned a business plan on the back of a beer coaster with a core purpose of reducing stacks of paperwork in the business environment. At the time, an electrician was tending to some electrical repairs in Keith’s home and overheard this discussion and piped up, that removing the stacks of paperwork involved in code of compliance forms would be a game-changer. With that, Keith set out to establish EasyForms in March, 2013 from his home. Dave Rouse was brought on as Quality Assurance Director and business partner in July 2015 to drive strategy. The company has a marketing and sales team, an international division of 4, 7 directors and a total of 20 staff in our Auckland offices.

Over 4 years, EasyForms has acquired clients across the globe, in New Zealand, Australia, the Pacific Islands, Canada, The United Kingdom, Ireland and Korea. The company started out automating paper forms into app-based solutions and has now evolved to provide a complete solution for workflow management and develops bespoke web portal and app-based solutions.</p>
          {/* <ul>
            {this.state.api.map(user =>
              <li key={user.id}>{user.username}</li>
            )}
          </ul> */}
          {/* <Footer /> */}
        </div>
      );
    }
  }

export default About;