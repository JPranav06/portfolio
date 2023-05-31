import React from 'react'
import './footer.css'
import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'

export const Footer = () => {
  return (
   <footer>
    <a href="#footer" className='footer__logo'>Pranav</a>
    <ul className='permalinks'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Service</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className='footer__socials'>
      <a href="https://www.facebook.com/profile.php?id=100007276246922" target='blank'> <BsFacebook/></a>
      <a href="https://twitter.com/GodsHandYT" target='blank' > <BsTwitter/>  </a>
      <a href="https://www.instagram.com/chill_beer_/" target='blank'> <BsInstagram/> </a>
    </div>
    <div className='footer__copyrights'>
      <small>&copy;Pranav.All Rights Reserved.</small>
    </div>
   </footer>
  )
}
export default Footer