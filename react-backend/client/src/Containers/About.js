import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from "styled-components-breakpoint";
import Theme from '../Components/theme';

class About extends Component {
    constructor(props) {
      super(props)
      this.state = {
        about: []
      }
    }

    componentDidMount() {
      let self = this;
      var data = {
        id: this.state.id,
        title: this.state.title,   
    }

      fetch('/about', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({about: data});
    }).catch(err => {
    console.log('caught it!',err);
    })
    }

    _renderContents = () => {
      const Contents = this.state.about.map((about, index) => {
        return <Section title={about.title} description={about.description} key={index} />
      });
      return Contents;
    }

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
          
          {this.state.about ? this._renderContents():'Loading'}

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
 
  class Section extends Component{
    render(){
      const {title, description, key} = this.props;
  
        // if(key === 0){
        //   return(<SectionSecond>
        //     <h1>{this.props.title}</h1>
        //     <div>{this.props.description}</div>
        //     </SectionSecond>) 
        // } else if(key === 1){
        //   return(<ThirdSecond>
        //     <h1>{this.props.title}</h1>
        //     <div>{this.props.description}</div>
        //     </ThirdSecond>) 
        // }
        return(<SectionSecond>
          <h1>{this.props.title}</h1>
          <div>{this.props.description}</div>
          </SectionSecond>)
    }
  }

  // class Section extends 
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
