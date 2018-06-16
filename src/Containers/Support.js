import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import styled, { css, ThemeProvider } from 'styled-components';
import breakpoint from "styled-components-breakpoint";
import Theme from '../Components/theme';
import SupportBg from '../Assets/Images/backgrounds/support.jpg'

class Support extends Component {
    render() {
      return (
          <ThemeProvider theme={Theme}>
            <Section>
                <h1>Submit a Support Ticket</h1>
                <div>
                    Please complete the form below which will direct your request to the appropriate 
                    member of the team. This ensures greater efficiency around response times and also
                    ensures processes are followed. <br /><br /> 
                    We aim to respond to support requests within 24 hours 
                    on regular business days, however, depending on the scale of your request this could 
                    take slightly longer.
                </div>
                <Form>
                    <form>
                        <label>Full Name Required</label>
                        <input type="text" id="name" name="name" pattern="[a-zA-Z\s]+" className="inputStyle" required />
                        <label>Company Name</label>
                        <input type="text" id="companyName" name="companyName" pattern="[a-zA-Z\s]+" className="inputStyle" required />
                        <label>Phone Number</label>
                        <input type="number" id="name" name="name" pattern="[a-zA-Z\s]+" className="inputStyle" required />
                        <label>Your Email Required</label>
                        <input type="email" id="name" name="name" pattern="[a-zA-Z\s]+" className="inputStyle" required />
                        <label>Support Type</label>
                        <select className="inputStyle">
                            <option value="Forgot My Password / Account User">Forgot My Password / Account User</option>
                            <option value="Need Some Help">Need Some Help</option>
                            <option value="Add Something New">Add Something New</option>
                            <option value="Variation Request">Variation Request</option>
                            <option value="Something is not working">Something is not working</option>
                        </select>
                        <label>Description Required</label>
                        <textarea type="text" id="name" name="name" pattern="[a-zA-Z\s]+" maxlength="500" className="inputStyle" required />                       
                        <input type="submit" name="submit" value="Submit Support Request" className="btn"/>
                        <input type="reset" name="" value="Clear" className="btn"/>
                    </form>
                </Form>
            </Section>
          </ThemeProvider>
      )
    }
  }
  
  const Section = styled.div`
    background-image:url('${SupportBg}');
    background-size:cover;
    padding:3em;
    color:white;
    text-align:center;
    h1{
      font-size:50px;
    };
    div{
      font-size:20px;
      font-weight:200;
    }
  `
  const InputStyle = css`
    width:100%;
    height:30px;
    margin: 5px 0 10px 0;
  `

  const Form = styled.div`
    background-color:${props => props.theme.mainColor};
    margin-top:2em;
    padding:1em;
    text-align:left;
    label{
        font-size:14px;
    };
    .inputStyle{
        ${InputStyle};
    };
    .btn {
        ${InputStyle};
        border-radius:5px;
        border: 1px soild #ffffff;
        background-color:transparent;
        color:white;
        font-size:16px;
        text-align:center;
    }
  `
  export default Support;