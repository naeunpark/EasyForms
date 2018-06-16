import React, { Component } from 'react';
import Logo from '../../Assets/Images/logos/logo.png';
import * as FontAwesome from 'react-icons/lib/fa';
import styled, { ThemeProvider } from 'styled-components';
import breakpoint from "styled-components-breakpoint";
import Theme from '../theme';

class Header extends Component{
    navToggle(){
        let toggle = {NavNarrow};
    }
    render(){
        return(
            <ThemeProvider theme={Theme}>
                <Container>
                    <div>
                        <LogoImg src={Logo} alt="Logo"/>
                    </div>
                    <nav>
                        <NavWide>
                            <a href="../../Containers/index.js">Home</a>
                            <a href="../../Containers/About.js">About Us</a>
                            <a href="../../Containers/Support.js">Support</a>
                            <a href="../../Containers/Blog.js">Blog</a>
                            <a href="../../Containers/Contact.js">Contact Us</a>
                        </NavWide>
                        <Burger>
                          <FontAwesome.FaBars size={30} onClick={this.navToggle}/>
                        </Burger>
                        <NavNarrow>
                            <a href="../../Containers/index.js">Home</a>
                            <a href="../../Containers/About.js">About Us</a>
                            <a href="../../Containers/Contact.js">Contact Us</a>
                            <a href="../../Containers/Support.js">Support</a>
                            <a href="../../Containers/index.js">Terms & Conditions</a>
                        </NavNarrow>
                    </nav>
                </Container>
            </ThemeProvider>


        );
    }
}
const Container = styled.div`
    background-color:#04263d;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2em;
`
const LogoImg = styled.img`
    width:160px;
`
const NavWide = styled.div`
    ${breakpoint("mobile")`display:none`};
    ${breakpoint("tablet")`display:block`};
    ${breakpoint("desktop")`display:block`};
    a {
        color:white;
        padding-right:15px;
    }
`
const Burger = styled.div`
    ${breakpoint("mobile")`display:block`};
    ${breakpoint("tablet")`display:none`};
    ${breakpoint("desktop")`display:none`};
    color:white;
`
const NavNarrow = styled.div`
    ${breakpoint("mobile")`display:none`};
    ${breakpoint("tablet")`display:none`};
    ${breakpoint("desktop")`display:none`};
`

export default Header;

