import React, { Component } from 'react';
import logo from '../../Assets/Images/logo.png';
import * as FontAwesome from 'react-icons/lib/fa';

class Footer extends Component{
    render(){
        return(
            <div style={styles.footer}>
                <div style={styles.col}>
                    <p style={styles.colTitle}>EasyForms</p>
                    <ul style={styles.colContent}>
                        <li>0800 EASY FORMS</li>
                        <li>0800 3279 36767</li>
                        <li>office@easyforms.co.nz</li>
                        <li>4a Te Kea Place,</li>
                        <li>Rosedale, Auckland</li>
                    </ul>
                </div>
                <div style={styles.col}>
                    <p style={styles.colTitle}>Site Map</p>
                    <ul style={styles.colContent}>
                        <li style={styles.colContentLi}><a style={styles.colContentA} href="../../Containers/index.js">Home</a></li>
                        <li style={styles.colContentLi}><a style={styles.colContentA} href="../../Containers/About.js">About Us</a></li>
                        <li style={styles.colContentLi}><a style={styles.colContentA} href="../../Containers/Contact.js">Contact Us</a></li>
                        <li style={styles.colContentLi}><a style={styles.colContentA} href="../../Containers/Support.js">Support</a></li>
                        <li style={styles.colContentLi}><a style={styles.colContentA} href="../../Containers/index.js">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div style={styles.col}>
                    <img src={logo} style={{width:150}}/>
                </div>
                <div style={styles.col}>
                    <FontAwesome.FaFacebook style={styles.colContentIcon}/>
                    <FontAwesome.FaTwitter style={styles.colContentIcon}/>
                    <FontAwesome.FaLinkedin style={styles.colContentIcon}/>
                </div>                
            </div>
        )
    }
}

const styles = {
    footer:{
        backgroundColor:'#0f405e',
        height:300,
        width:'auto',
        display:'grid',
        gridTemplateColumns: "1fr 1fr",
        gridColumnGap: "1.5em",
        paddingLeft:'2em',
        paddingRight:'2em'
    },
    col:{
        textAlign:'left'
    },
    colTitle:{
        fontSize:18,
        color:'#ffffff'
    },
    colContent:{
        fontSize:16,
        color:'#949ba1',
        paddingLeft:0
    },
    colContentLi:{
        paddingBottom:7
    },
    colContentA:{
        color:'#949ba1',
    },
    colContentIcon:{
        color:'#949ba1',
        fontSize:30,
        paddingRight:5
    }
}

export default Footer;