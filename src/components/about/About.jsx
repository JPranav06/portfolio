import React from 'react' //rafce//
import './about.css'
import Me from '../../assets/Me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="abount__me">
          <div className="about__me-image">
            <img src={Me} alt='no'/>
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Skills</h5>
              <small>HTML CSS JS React.Js Python Django</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10 Projects Completed</small>
            </article>
          </div>
          <p>
          Hello,My name is J.Pranav, and I'm from Chennai. In 2022, I graduated from Hindustan University with a B.Tech and an overall CGPA of 8.2.I then decided to pursue a career in information technology, so I enrolled in a Full Stack Course where I learned both Front End and Back End languages, including HTML, CSS, JavaScript, React.JS, BootStrap, Python, Django, MySQL, and Node.Js. I finished my course in February 2023, and I'm now looking for a Full Stack Developer Fresher role.
          </p>

          <a href='#contact' className='btn btn-primary'> Lets Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About