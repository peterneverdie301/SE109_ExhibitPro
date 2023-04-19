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
         type: 'The Kiss',
         title: 'Gustav Klimt',
         description:
            '"The Kiss" is a famous painting by Gustav Klimt depicting a couple in a passionate embrace, surrounded by ornate patterns and gold leaf. It is considered a masterpiece of the Art Nouveau movement.',
         imageUrl: 'https://www.gustav-klimt.com/images/paintings/The-Kiss.jpg',
         path: '/',
         backgroundColor: 'bg-slider_bg-orange'
      },
      {
         type: 'Red, Blue, and Yellow',
         title: 'Piet Mondrian',
         description: 'Mondrian Composition II in Red, Blue, and Yellow" is an abstract painting composed of simple geometric shapes and black lines on a background of red, blue, and yellow. It was painted by Piet Mondrian in 1930 and is considered an icon of Abstract Art.',
         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg',
         path: '/',
         backgroundColor: 'bg-slider_bg-blue'
      },
      {
         type: 'Nighthawks',
         title: 'Edward Hopper',
         description: '"Nighthawks" is a famous painting by Edward Hopper depicting a scene of a late-night diner in an urban setting. The painting portrays a sense of loneliness and isolation, as the people in the diner seem disconnected from each other and the outside world. It has become an iconic image of modern urban alienation.',
         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg',
         path: '/',
         backgroundColor: 'bg-slider_bg-yellow'
      },
      {
         type: 'Wheel of Life',
         title: 'Tibetan Buddhist',
         description: '"Wheel of Life" is a famous painting from Tibetan Buddhist tradition that depicts the cycle of birth, death, and rebirth. The painting is divided into six sections, each representing a different stage of life, and shows various images and figures, such as animals, demons, and celestial beings. The Wheel of Life is a powerful symbol of the impermanence and interdependence of all things and is used in Buddhist teachings to illustrate the concept of samsara, the cycle of birth, death, and rebirth..',
         imageUrl: 'https://www.learnreligions.com/thmb/_90UOGH-9TsgJ1rtXDVhsYk8Nz0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/A1wheelrealm-56a0c4133df78cafdaa4d32c.jpg',
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
                  >
                     Read more
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
