import React from 'react'
import CV from '../../assets/J.Pranav.pdf'


export const CTA = () => {
  return (
    <div className='CTA'>
       <a href={CV} download className='btn'>Download CV</a>
       <a href='#contact' className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}
export default CTA