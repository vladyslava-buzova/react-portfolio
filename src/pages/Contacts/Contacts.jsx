import React from 'react'
// import '../../App.css'
import '../../index.css'
import './Contacts.css';
import { BsEmojiSmile } from 'react-icons/bs';

export const Contacts = () => {
  return (
    <section className="contactme-section" id="contacts">
      <div className="container">
        <h2 className="contactme__title">Contacts</h2>
        <p className="contactme__text">
          {`Please feel free to send me a message to my e-mail `}
          <span className="email-span">vladyslava.buzova@gmail.com</span>
          {` or connect with me on social media. I will get back to you as soon as possible`}
        </p>
        <h3 className="title-secondary footer__title">
          Let's make something great together! <BsEmojiSmile />
        </h3>
      </div>
    </section>
  )
}
