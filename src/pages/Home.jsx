import React from 'react'
import { AuthorizedDealer, Hero, Intro, Services } from '../components'

const Home = () => {
     return (
          <>
               <Hero />
               <Intro />
               <Services />
               <AuthorizedDealer />
          </>
     )
}

export default Home