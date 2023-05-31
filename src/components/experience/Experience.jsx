import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React.Js</h4>
                <AiFillStar/><AiFillStar/><AiFillStar/>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>BootStrap</h4>
                <AiFillStar/><AiFillStar/><AiFillStar/>
              </div>
            </article>
          </div>

        </div>
        <div className="experience__frontend">
          <h3>Back End Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Django</h4>
                <AiFillStar/><AiFillStar/><AiFillStar/>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <AiFillStar/>
                <AiFillStar/>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node.Js</h4>
                <AiFillStar/><AiFillStar/>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}
export default Experience