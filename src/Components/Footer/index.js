import React, { Component } from 'react';
import Logo from '../../Assets/Images/logo.png';
import * as FontAwesome from 'react-icons/lib/fa';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../theme';

class Footer extends Component{
    render(){
        return(
            <ThemeProvider theme={Theme}> 
                <Container>
                    <Col>
                        <Title>EasyForms</Title>
                        <Content>
                            <Li>0800 EASY FORMS</Li>
                            <Li>0800 3279 36767</Li>
                            <Li>office@easyforms.co.nz</Li>
                            <Li>4a Te Kea Place,</Li>
                            <Li>Rosedale, Auckland</Li>
                        </Content>
                    </Col>
                    <Col>
                        <Title>Site Map</Title>
                        <Content>
                            <Li><Anchor href="../../Containers/index.js">Home</Anchor></Li>
                            <Li><Anchor href="../../Containers/About.js">About Us</Anchor></Li>
                            <Li><Anchor href="../../Containers/Contact.js">Contact Us</Anchor></Li>
                            <Li><Anchor href="../../Containers/Support.js">Support</Anchor></Li>
                            <Li><Anchor href="../../Containers/index.js">Terms & Conditions</Anchor></Li>
                        </Content>
                    </Col>
                    <Col>
                        <LogoImg src={Logo} alt="Logo"/>
                    </Col>
                    <Col>
                        <FontAwesome.FaFacebook style={Icon}/>
                        <FontAwesome.FaTwitter style={Icon}/>
                        <FontAwesome.FaLinkedin style={Icon}/>
                    </Col>                
                </Container>
            </ThemeProvider>
        )
    }
}
const Container = styled.div`
    background-color:${props => props.theme.mainColor};
    width:auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5em;
    padding:2em;
`
const Col = styled.div`
    text-align:'left'
`

const Title = styled.p`
    font-size:18px;
    color:#ffffff;
`

const Content = styled.ul`
    font-size:16px;
    color:${props => props.theme.lightGrey};
    padding-left:0;
`

const Li = styled.li`
    padding-bottom:5px;
`

const Anchor = styled.a`
    color:${props => props.theme.lightGrey};
`
const LogoImg = styled.img`
    width: 150px;
`

const Icon = {
    color:'#949ba1',
    fontSize:30,
    paddingRight:5
}

export default Footer;