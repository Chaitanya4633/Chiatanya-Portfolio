import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../CSS/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6iniz6t', 'template_ywcpeso', form.current, 'lBk2GRrGhbO8BFvsQ')
      .then(
        (result) => {
          alert('Message sent successfully 😄');
          form.current.reset();
        },
        (error) => {
          alert('Oops, something went wrong! 😢');
          console.error(error);
        }
      );
  };

  return (
    <div className="Contact-Container" id="contact">
      <h2 className="Contact-Title">Contact Me</h2>
      <p className="Contact-Subtitle">Have a question or want to work together?</p>

      <div className="Contact-Content">
        <form className="Contact-Form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="Contact-Info">
          <h4>Email: p.chaitanyapyla@gmail.com</h4>
          <h4>Phone: +91 9618437481</h4>
          <h4>Location: Andhra Pradesh, India</h4>
        </div>
      </div>
    </div>
  );
}

export default Contact;
