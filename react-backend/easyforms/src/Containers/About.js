import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from "styled-components-breakpoint";
import Theme from '../Components/theme';

class About extends Component {
    render() {
      return (
          <div>
          <SectionFirst>
            <h1>Global clients around Us</h1>
            <div>
              Over 4 years, EasyForms has acquired clients
              across the globe, in New Zealand, Australia,
              the Pacific Islands, Canada, The United Kingdom, Ireland and Korea.
            </div>
          </SectionFirst>
          <SectionSecond>
            <h1>About Us</h1>
            <div>
            EasyForms is a 100% Kiwi owned and operated company which grew from one man’s passion 
            for innovation and technology. Keith Archer wanted to create a company that would make 
            a real difference to customers and their businesses. Not just one that said the right 
            things, but that actually delivered. In true Kiwi style, over a beer and brain storming 
            session with a friend, Keith penned a business plan on the back of a beer coaster with a 
            core purpose of reducing stacks of paperwork in the business environment. At the time, 
            an electrician was tending to some electrical repairs in Keith’s home and overheard this 
            discussion and piped up, that removing the stacks of paperwork involved in code of 
            compliance forms would be a game-changer. With that, Keith set out to establish EasyForms 
            in March, 2013 from his home. Dave Rouse was brought on as Quality Assurance Director and 
            business partner in July 2015 to drive strategy. The company has a marketing and sales 
            team, an international division of 4, 7 directors and a total of 20 staff in our Auckland 
            offices.
            Over 4 years, EasyForms has acquired clients across the globe, in New Zealand, Australia, 
            the Pacific Islands, Canada, The United Kingdom, Ireland and Korea. The company started 
            out automating paper forms into app-based solutions and has now evolved to provide a 
            complete solution for workflow management and develops bespoke web portal and app-based 
            solutions.
            </div>
          </SectionSecond>
          <ThirdSecond>
            <h1>Our Vision</h1>
            <div>
            To provide you with better control and increased transparency of your business, 
            while streamlining your workflow and job management processes. This increases productivity, 
            duces operational costs and ultimately saves you time so you can focus on the things you 
            need to, while giving you the ability to mobilise your business effortlessly.
            </div>
          </ThirdSecond>
          </div>
      )
    }
  }
  
  const SectionFirst = styled.div`
    background-color:#0f405e;
    padding:3em;
    color:white;
    text-align:center;
    h1{
      font-size:50px;
    };
    div{
      font-size:20px;
    }
  `
  const SectionSecond = styled.div`
    background-color: white;
    padding:50px;
    text-align:center;
    h1{
      font-size:50px;
    };
  `
  const ThirdSecond = styled.div`
    background-color: #f5f9f9;
    padding:50px;
    text-align:center;
    h1{
        font-size:50px;
    };
    `
  export default About;
