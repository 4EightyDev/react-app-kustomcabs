import { faArrowRight, faFilePen } from '@fortawesome/pro-light-svg-icons'
import React from 'react'
import { Button } from '.'

const Intro = () => {
     return (
          <section id='intro'>
               <div className="container grid grid-cols-1 lg:grid-cols-2 lg-flex items-center">
                    <div className='p-4 md:p-6 lg:p-8'>
                         <img className='w-full' src={require('../images/img-kitchen_sketch.jpg')} alt='From Concept to Completion' />
                    </div>
                    <div className="justify-start flex-col p-4 md:p-6 lg:p-8">
                         <h2 className='mb-8'>
                              <span className='text-neutral-400'>[ From Concept ]</span>
                              <span className="font-serif text-4xl block text-gold">To Completion</span>
                         </h2>
                         <p>The Kustomcabs vision is to create an aesthetically stunning and functional cabinetry solution for your home. Our tried-and-true process guides your project from concept to completion. Our talented design consultants are experts at listening to your needs and wants. We take your design inspirations, lifestyle, and budget into consideration, and work with you to create the kitchen, bathroom, or home office of your dreams!</p>
                         <Button icon={faArrowRight} className='mt-6 font-serif capitalize flex-row-reverse' classText='mr-2' href='/about-us' text='Read Our Story' />
                    </div>
               </div>
          </section>
     )
}

export default Intro