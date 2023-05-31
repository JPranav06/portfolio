import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {AiFillStar} from 'react-icons/ai'



const data = [
  {
    avatar:AVTR1,
    name : 'Emilia',
    star : <div>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
    </div>,
    review :'A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.'
  },

  {
    avatar:AVTR2,
    name : 'Tina',
    star : <div>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
    </div>,
    review :' We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out.'
  },
  {
    avatar:AVTR3,
    name : 'Marry',
    star : <div>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
    </div>,
    review :'The service is smooth and straightforward. My advisor was helpful. I would recommend deal direct.'
  },
  {
    avatar:AVTR4,
    name : 'Mia',
    star : <div>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
      <AiFillStar/>
    </div>,
    review :'Great customer service! The man I spoke with was very helpful in answering questions as well as helping in finding the best hotel for my husband and I.'
  }
]




export const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Client Reviews</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
            modules={[Navigation,Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review,star},index) => {
            return(
              <SwiperSlide key={index}className='testimonial' >
              <div className='client__avatar'>
              <img src={avatar} alt="no img" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
              <rating className='client__rating'>{star}</rating>
            </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}
export default Testimonial