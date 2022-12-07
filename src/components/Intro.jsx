import React from 'react'
import { Button } from '.'

const Intro = (props) => {
     return (
          <section id='intro'>
               <div className="container grid grid-cols-1 lg:grid-cols-2 lg-flex items-center">
                    <div className='p-4 md:p-6 lg:p-8'>
                         <img className='w-full' src={require('../images/img-kitchen_sketch.webp')} alt='From Concept to Completion' />
                    </div>
                    <div className="justify-start flex-col p-4 md:p-6 lg:p-8">
                         <h2 className='mb-8'>
                              <span className='text-neutral-400'>[ {props.subtitle} ]</span>
                              <span className="font-serif text-4xl block text-gold">{props.title}</span>
                         </h2>
                         <p>{props.copy}</p>
                         <Button icon={props.buttonIcon} className='mt-6 font-serif capitalize flex-row-reverse' classText='mr-2' href={props.buttonHref} text={props.buttonText} />
                    </div>
               </div>
          </section>
     )
}

export default Intro