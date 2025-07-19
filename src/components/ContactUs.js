import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './styles.css'
import FacebookLogo from '../media/facebook.png'
import EmailLogo from '../media/email.png'
import DirectionLogo from '../media/address.png'
import PhoneLogo from '../media/phone.png'
import WhatsappLogo from '../media/whatsapp.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactUs() {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {

    emailjs
      .sendForm('service_31lrh8r', 'template_ziee5bl', form.current, {
        publicKey: 'nIsRqBq4ln1m3FC_E',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
           e.preventDefault();
          console.log('FAILED...', error.text);
         
        },
      );
    }



  return (
    <div className="mainContainer">
      <div className="contactContainer">
        <h4 className="contactHeading"><u>Contact Us</u></h4>
        <div className="contactDetails"> 
        <img src={FacebookLogo} className="facebook-logo" alt="Facebook Logo"/>
        <h6 className="socialMediaAddresses">www.facebook.com/portiatendo</h6>
        </div>
         <div className="contactDetails"> 
        <img src={EmailLogo} className="facebook-logo" alt="Email Logo"/>
        <h6 className="socialMediaAddresses">tendaijamwanda77@gmail.com</h6>
        </div>
         <div className="contactDetails"> 
        <img src={PhoneLogo} className="facebook-logo" alt="Facebook Logo"/>
        <h6 className="socialMediaAddresses">082 426 5039</h6>
        </div>
         <div className="contactDetails"> 
        <img src={DirectionLogo} className="facebook-logo" alt="Direction Logo"/>
        <h6 className="socialMediaAddresses">27 Cnr 14th Avenue And Cason Road, Boksburg</h6>
        </div>
        <div className="contactDetails"> 
        <img src={WhatsappLogo} className="facebook-logo" alt="Whatsapp Logo"/>
        <h6 className="socialMediaAddresses">082 426 5039</h6>
        </div>
      </div>

      <div className="formContainer">
        <Form noValidate validated={validated} onSubmit={sendEmail} ref={form}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Your name"
            name="user_name"
          />
          <Form.Control.Feedback type="invalid">Please provide your name</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="user_lastname"
          />
          <Form.Control.Feedback type="invalid">Please provide your last name</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" required name="user_email" />
          <Form.Control.Feedback type="invalid">
            Please provide an email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Cellphone Number</Form.Label>
          <Form.Control type="text" placeholder="Cellphone No" required name="user_phone" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid cellphone number
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Form.Label>Message</Form.Label>
      <Form.Group as={Col} md="12" controlId="validationCustom05">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Your message"
          required
          name="user_message"
        />
        <Form.Control.Feedback type="invalid">
          Please provide a message.
        </Form.Control.Feedback>
      </Form.Group>
      <br />
      <Button type="submit">Submit form</Button>
    </Form>
      </div>
    </div>
    
  );
}

