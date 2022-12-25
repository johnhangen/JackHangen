import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <label>
        Name:
        <input type="text" name="name" className="input" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" className="input" />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" className="input" />
      </label>
      <br />
      <input type="submit" value="Send" className="button" />
    </form>
  );
};

export default ContactForm;
