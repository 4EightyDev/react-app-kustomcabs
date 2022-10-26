import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { SectionTitle } from '.'
import { LogoKustomcabs, LogoCoveredBridge, LogoLectusCabinets, LogoLegend, LogoMeritKitchens, LogoSaltInternational, LogoUSCD } from '../images';

const AuthorizedDealer = () => {
     return (
          <section id='AuthorizedDealer' className='bg-white dark:bg-gray-dark dark:text-white'>
               <div className="container flex overflow-hidden items-center h-[75px] md:h-[100px]">
                    <SectionTitle class='mr-3 md:mr-4 lg:mr-6' first='Authorized' second='Dealer For' />
                    <OwlCarousel className='owl-theme overflow-hidden' nav={false} dots={false} stageClass='flex-center' responsive={
                              {
                                   0: {
                                        items: 1
                                   },
                                   500: {
                                        items: 3
                                   },
                                   750: {
                                        items: 4
                                   },
                                   850: {
                                        items: 5
                                   },
                                   950: {
                                        items: 6
                                   }
                              }
                         }>
                         <img className='dealer-logo px-3' src={LogoKustomcabs} alt='Kustomcabs' />
                         <img className='dealer-logo px-3' src={LogoCoveredBridge} alt='Covered Bridge' />
                         <img className='dealer-logo px-3' src={LogoLectusCabinets} alt='Lectus Cabinets' />
                         <img className='dealer-logo px-3' src={LogoLegend} alt='Legend' />
                         <img className='dealer-logo px-3' src={LogoMeritKitchens} alt='Merit Kitchens' />
                         <img className='dealer-logo px-3' src={LogoSaltInternational} alt='Salt International' />
                         <img className='dealer-logo px-3' src={LogoUSCD} alt='US Cabinet Depot' />
                    </OwlCarousel>
               </div>
          </section>
     )
}

export default AuthorizedDealer