import React, { Component } from 'react';
import logo from '../../Assets/Images/logo.png';
import * as FontAwesome from 'react-icons/lib/fa';
import Mediaquery from 'react-responsive';
import {
    // BrowserRouter as Router,
    Link,
    // Route,
    // Switch,
  } from 'react-router-dom';
import App from '../../Containers/App';
import About from '../../Containers/About';
import Contact from '../../Containers/Contact';

class Header extends Component{
    navToggle(){
        let toggle = document.querySelector('.navNarrowMenu');
        if (toggle.style.display === 'block'){
            toggle.style.display = 'none';
        } else {
            toggle.style.display = 'block';
        }
    }
    render(){
        return(
            <div style={header}>
                <div>
                    <img src={logo} style={logoImg}/>
                </div>
                <nav>
                    <Mediaquery query="(min-device-width: 768px)">
                    <div style={navWide}>
                        <div>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/support">Support</Link>
                            <Link to="/blog">Terms & Conditions</Link>
                        </div>
                    </div>
                    </Mediaquery>
                    <Mediaquery query="(max-device-width: 500px)">
                    <div style={navNarrow}>
                        <FontAwesome.FaBars size={30} onClick={this.navToggle}/>
                        <div className={navNarrowMenu} style={navNarrowMenu}>
                            <a href="../../Containers/index.js">Home</a>
                            <a href="../../Containers/About.js">About Us</a>
                            <a href="../../Containers/Contact.js">Contact Us</a>
                            <a href="../../Containers/Support.js">Support</a>
                            <a href="../../Containers/index.js">Terms & Conditions</a>
                        </div>
                    </div>
                    </Mediaquery>
                </nav>
            </div>


        );
    }
}

const header = {
    backgroundColor:'#04263d',
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    padding:'2em'
}
const logoImg = {
    width:160,
    height:'auto'
}
const navWide = {
}
const navNarrow = {
    color:'white'
}
const navNarrowMenu = {
}

export default Header;

