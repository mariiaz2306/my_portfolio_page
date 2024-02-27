import React from 'react';
import { FaEnvelopeOpen,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedin,
  FaPhoneSquareAlt
 } from 'react-icons/fa';
 import {FiSend} from'react-icons/fi';
 import "./contact.css"

const Contact = () => {
  return (
<section className="contact section">
<h2 className="section__title">Let's be <span>in Touch</span></h2>

<div className="contact__container container grid">
  <div className="contact__data">

    <h3 className="contact__title">Contact Information</h3>
    <p className="contact__description">
      You can reach me via email, phone or social media. Feel free to reach out to me if you have any questions, I am ready to discuss new projects and ideas.
    </p>

    <div className="contact__info">
      <div className="info__item">
        <FaEnvelopeOpen className='info__icon'/>

        <div>
          <span className="info__title">Mail me</span>
          <h4 className="info_desc">mariianader2305@gmail.com</h4>
        </div>
      </div>

      <div className="info__item">
        <FaPhoneSquareAlt className='info__icon'/>

        <div>
          <span className="info__title">Call me</span>
          <h4 className="info_desc">+49 162 380 1217</h4>
        </div>
      </div>
    </div>

    <div className="contact__socials">
      <a href="https://www.facebook.com/mariia.ziangirova" className="contact__social-link">
        <FaFacebookF/>
      </a>

      <a href="https://www.linkedin.com/in/mariia-ziangirova-3a3323293/" className="contact__social-link">
        <FaLinkedin/>
      </a>
    </div>
</div>

<form className="contact form">
  <div className="form__input-group">
    <div className="form__input-div">
      <input type="text" 
      className="form__control"
      placeholder="Your Name" />
    </div>

    <div className="form__input-div">
      <input type="email" 
      className="form__control"
      placeholder="Your Email" />
    </div>

    <div className="form__input-div">
      <input type="text" 
      className="form__control"
      placeholder="Your Subject" />
    </div>
    </div>

    <div className="form__input-div">
    <textarea
    placeholder='Your Message'
    className="form__control textarea">
    </textarea>
    </div>

    <button className='button'>
      Send Message
      <span className="button__icon contact__button-icon">
        <FiSend/>
      </span>
    </button> 
</form>
</div>
</section>
  )
}

export default Contact