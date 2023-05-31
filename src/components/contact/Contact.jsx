import React from 'react' //rafce
import './contact.css'
import {AiTwotoneMail} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t1xn0ir', 'template_7d4nsbg', form.current, 'QncPwfKT4_2edkHxA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail className='.contact__option-icon'/>
            <h4>E-Mail</h4>
            <h5>pranavworkss@gmail.com</h5>
            <a href="mailto:pranavworkss@gmail.com" target='blank'>Click here to send a Mail</a>
          </article>
          <article className="contact__option">
            <AiFillInstagram className='.contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>ChillBeer</h5>
            <a href="https://www.instagram.com/chill_beer_/" target='blank'>Click here to send message on Instagram</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='.contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=8838523681" target='blank'>Click here to send a message on WhatsApp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Name' required />
          <input type="email" name="email" placeholder='Enter Your E-Mail' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Your Message' required></textarea>
          <button type ='submit' className='btn btn-primary'> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact