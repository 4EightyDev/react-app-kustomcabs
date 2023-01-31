import React from 'react'
import { AuthorizedDealer, Hero, Intro, Services, HomeMoreCopy } from '../components'
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons'

const Home = () => {
     return (
          <>
               <Hero />
               <Intro
                    subtitle='Your One-Stop'
                    title='Cabinet Shop'
                    copy='The Kustomcabs vision is to create an aesthetically attractive and functional cabinetry solution for your home. Our tried-and-true process guides your project from concept to completion. Our talented design consultants are experts at listening to your needs and wants. We have been custom cabinet makers based in Chandler, AZ, and our years of experience make us the best cabinet installers in the greater Phoenix area. We consider your design inspirations, lifestyle, and budget and work with you to create the kitchen, bathroom, or home office of your dreams!'
                    buttonIcon={faArrowRight}
                    buttonHref='/free-quote'
                    buttonText='Get a Free Quote'
               />
               <Services />
               <AuthorizedDealer />
               <HomeMoreCopy />
          </>
     )
}

export default Home