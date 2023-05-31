import React from "react";
import './services.css'
import {BiCheck} from 'react-icons/bi'


const services = () => {
  return(
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Creating Web Designs </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Animations</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>UI/UX Templates</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Responsive Websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Adaptive Websites</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Static Websites</p>
            </li>

          </ul>
        </article>
        <article className='services'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>How to Setup Stream for Youtube</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Guides for Monetisation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Tips and Tricks for Video Editing</p>
            </li>

          </ul>
        </article>
      </div>

    </section>
  )
}

export default services;