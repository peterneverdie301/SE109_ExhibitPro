import { Button } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
// Swiper import
import SwiperCore, { Autoplay, EffectFade } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import './HeroSlider.scss'

HeroSlider.propTypes = {}

function HeroSlider() {
   SwiperCore.use([Autoplay, EffectFade])

   const items = [
      {
         type: 'The Landscape',
         title: 'Exhibition of Nostalgia',
         description:
            '"A captivating painting depicting a serene landscape, where rolling hills meet a shimmering lake under the golden glow of a setting sun.',
         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
         path: '/',
         backgroundColor: 'bg-slider_bg-orange'
      },
      {
         type: 'Portrait',
         title: 'Exhibition of Facial expressions',
         description: 'A captivating portrait capturing the essence of the subject, with intricate details that bring their emotions and personality to life.',
         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Gustav_Klimt_046.jpg',
         path: '/',
         backgroundColor: 'bg-slider_bg-blue'
      },
      {
         type: 'Abstract',
         title: 'Exhibition of Abstraction in thought',
         description: 'With bold brushstrokes and vibrant colors evoking a sense of emotion and allowing for individual interpretation.',
         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Vassily_Kandinsky%2C_1913_-_Composition_7.jpg',
         path: '/',
         backgroundColor: 'bg-slider_bg-yellow'
      },
      {
         type: 'Classical',
         title: 'Exhibition of Old and Antique',
         description: 'A captivating classical painting that embodies the timeless beauty and harmonious compositions of the bygone eras, transporting viewers to a world of elegance and grace.',
         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Jean-Honor%C3%A9_Fragonard_009.jpg',
         path: '/',
         backgroundColor: 'bg-slider_bg-blue'
      }
   ]

   return (
      <section className="hero-slider font-poppins">
         <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            // navigation
            loop
            effect={'fade'}
         >
            {items.map((item, index) => (
               <SwiperSlide key={index}>
                  {({ isActive }) => (
                     <HeroSliderItem data={item} isActive={isActive} />
                  )}
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   )
}

const HeroSliderItem = ({ data, isActive }) => {
   // const history = useHistory()

   return (
      <div
         className={`hero-slider__item ${data.backgroundColor} ${isActive ? 'active' : ''}`}
      >
         <div className="hero-slider__item__content konsept-container">
            <div className="hero-slider__item__content__info">
               <h2 className="type font-handwriter">{data.type}</h2>
               <h2 className="title">{data.title}</h2>
               <div className="description">{data.description}</div>
               <div className="read-more">
                  <Button
                     sx={{
                        py: 1.3,
                        px: 6,
                        textTransform: 'none',
                        fontFamily: 'EB Garamond',
                        fontSize: '18px',
                        fontWeight: 400,
                        fontStyle: 'italic',

                        '&': {
                           backgroundColor: 'transparent'
                        }
                     }}
                     color="black"
                     variant="outlined"
                     href='/products'
                  >
                     Show Exbition
                  </Button>
               </div>
            </div>
            <div className="hero-slider__item__content__image">
               <img src={data.imageUrl} alt="" />
            </div>
         </div>
      </div>
   )
}
HeroSliderItem.propTypes = {
   data: PropTypes.object.isRequired,
   isActive: PropTypes.bool.isRequired
}

export default HeroSlider
