import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/P1.png'
import IMG2 from '../../assets/P2.png'
import IMG3 from '../../assets/P3.png'
import IMG4 from '../../assets/P4.png'
import IMG5 from '../../assets/P5.png'
import IMG6 from '../../assets/P6.png'
import IMG_7 from '../../assets/IMG_7.png'
import IMG_8 from '../../assets/IMG_8.png'
const data = [
  {
    id:1,
    image : IMG1,
    title : 'AMD Cloned Static WEB Page',
    github: 'https://github.com/JPranav06/frontend_projects/tree/main/AMD%20Clone',
  },
  {
    id:2,
    image : IMG2,
    title : 'Gusto First Project',
    github: 'https://github.com/JPranav06/frontend_projects/tree/main/Gusto_template_Practice',
  },
  {
    id:3,
    image : IMG3,
    title : 'Theme Forest Influencer M5',
    github: 'https://github.com/JPranav06/frontend_projects/tree/main/Influencer%20M5',
  },
  {
    id:4,
    image : IMG4,
    title : 'Bootstrap Project for Youtube Channel',
    github: 'https://github.com/JPranav06/frontend_projects/tree/main/bootstrap',
  },
  {
    id:5,
    image : IMG5,
    title : 'HexaShop Online Shopping E-Commerce',
    github: 'https://github.com/JPranav06/frontend_projects/tree/main/e-commerce',
  },

  {
    id:6,
    image : IMG6,
    title : 'Interact Template Project',
    github: 'https://github.com/JPranav06/frontend_projects/tree/main/interact_template_Pranav',
  },
  {
    id:7,
    image: IMG_7, 
    title:'Expense Tracker',
    github:'https://github.com/JPranav06/expense'
  },
  {
    id:8,
    image: IMG_8,
    title:'Register/Login Site where user must register and use login credentials to direct inside the App',
    github:"https://github.com/JPranav06/dailyworkstask",
  }
  

]
export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <h5>Click on GitHub and Download the Zip files to view the Projects</h5><br/><br/><br/>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                </div>
            </article>
            )
          })
        }
        
      </div>
    
    </section>
  )
}

export default Portfolio