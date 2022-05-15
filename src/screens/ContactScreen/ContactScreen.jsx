import React, { useState } from 'react';
import axios from 'axios';
import {  messagesUrl } from '../../helpers/constants';
import { v4 as uuid } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { HeaderSection } from '../../components/components.js';
import { messageSchema } from '../../validations/messageValidation';
import { Button } from 'react-bootstrap';
import img from '../../assets/pizzaLeft.jpg';
import './ContactScreen.css';

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  message: ""
}

const onSubmit = (values) => {
   values.id = uuid();
   axios.post(messagesUrl, values)
   .then(_ => {
      alert("Successfully sent!");
   })
   .catch(err => {
      console.log(err.message);
   })
}

const ContactScreen = () => {
  return(
      <div className="contact-screen">
          <div className="img">
             <img src={img} alt="Pizza" />
          </div>
          <div className="info">
              <h2 className="heading">Contact Us</h2>
              <Formik
               initialValues={initialValues}
               validationSchema={messageSchema}
               onSubmit={onSubmit}
              >
              <Form className="form">
                  <div className="form-controll">
                     <div className="error">
                        <ErrorMessage name="firstname"/>
                     </div>
                     <Field type="text" className="input" name="firstname" placeholder="First name" required />
                  </div> 
                  <div className="form-controll">
                     <div className="error">
                        <ErrorMessage name="lastname"/>
                     </div>
                     <Field type="text" className="input" name="lastname" placeholder="Last name" required />
                  </div> 
                  <div className="form-controll">
                     <div className="error">
                        <ErrorMessage name="email"/>
                     </div>
                     <Field type="email" className="input" name="email" placeholder="Email" required />
                  </div> 
                  <div className="form-controll">
                     <div className="error">
                        <ErrorMessage name="message"/>
                     </div>
                     <Field as="textarea" className="input" name="message" placeholder="Your message" required />
                  </div> 
                  <Button type="submit" variant="primary">Send</Button>
              </Form>
              </Formik>
          </div>
      </div>
  );
}

export default ContactScreen;