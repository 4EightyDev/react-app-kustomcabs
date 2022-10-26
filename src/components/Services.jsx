import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CardService } from '../components';
import { Kitchen, Bathroom, HomeOffice, LaundryRoom, RefacingRefinishing } from '../images'

const Services = () => {
     return (
          <div className='bg-gray-lighter dark:bg-gray-dark dark:text-white flex-center py-4 md:py-6 lg:py-8'>
               <OwlCarousel className='container owl-theme' nav={false} dots={false} margin={30} loop autoplay
                    responsive={
                         {
                              0: {
                                   items: 1,
                                   nav: false
                              },
                              600: {
                                   items: 2,
                                   nav: false
                              },
                              992: {
                                   items: 3,
                                   nav: false
                              },
                              1200: {
                                   items: 3,
                                   nav: false
                              }
                         }
                    }>
                    <CardService category='Kitchen Cabinetry' img={Kitchen} link='/services' />
                    <CardService category='Bathroom Cabinetry' img={Bathroom} link='/services' />
                    <CardService category='Home Office Cabinetry' img={HomeOffice} link='/services' />
                    <CardService category='Laundry Room Cabinetry' img={LaundryRoom} link='/services' />
                    <CardService category='Refacing and Refinishing' img={RefacingRefinishing} link='/services' />
               </OwlCarousel>
          </div>
     )
}

export default Services