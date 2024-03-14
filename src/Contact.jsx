import React from 'react';
import { Button } from './components/Button';

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="heading">Get in Touch</h1>
      <div className="contact-container">
        <div className="right-contact-form">
          <div>
            <input type="text" name="" id="" placeholder="First Name" />
            &nbsp;
            <input type="text" name="" id="" placeholder="Last Name" />
            <div>
              <input type="text" name="" id="" placeholder="Email" className="email" />
            </div>
            <div>
              <textarea name="" id="" cols="20" rows="7" placeholder="Message" className="teatarea"></textarea>
            </div>
            <Button title="Send" btnClass="Ashia" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
