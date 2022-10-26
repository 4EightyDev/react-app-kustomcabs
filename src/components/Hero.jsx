import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Hero = () => {
     return (
          <section id='Hero'>
               <OwlCarousel className='owl-theme' loop nav={false} items={1} autoplay autoplaySpeed={2000} animateIn='fadeIn' animateOut='fadeOut' dotsClass={'owl-dots mt-0 flex-center h-[30px] absolute bottom-0 w-full bg-black/20'}>
                    <div className='bg-kitchen bg-cover bg-center bg-hero'></div>
                    <div className='bg-bathroom bg-cover bg-center bg-hero'></div>
                    <div className='bg-home-office bg-cover bg-center bg-hero'></div>
                    <div className='bg-laundry-room bg-cover bg-center bg-hero'></div>
                    <div className='bg-refacing-and-refinishing bg-cover bg-center bg-hero'></div>
               </OwlCarousel>
          </section>
     )
}

export default Hero