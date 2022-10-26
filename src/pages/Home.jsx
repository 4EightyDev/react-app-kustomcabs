import React from 'react'
import { AuthorizedDealer, Hero, Intro, Services } from '../components'
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons'

const Home = () => {
     return (
          <>
               <Hero />
               <Intro
                    subtitle='From Concept'
                    title='To Completion'
                    copy='The Kustomcabs vision is to create an aesthetically stunning and functional cabinetry solution for your home. Our tried-and-true process guides your project from concept to completion. Our talented design consultants are experts at listening to your needs and wants. We take your design inspirations, lifestyle, and budget into consideration, and work with you to create the kitchen, bathroom, or home office of your dreams!'
                    buttonIcon={faArrowRight}
                    buttonHref='/our-story'
                    buttonText='Read Our Story'
               />
               <Services />
               <AuthorizedDealer />
          </>
     )
}

export default Home