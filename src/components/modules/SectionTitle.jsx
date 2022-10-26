import React from 'react'

const SectionTitle = (props) => {
     return (
          <div className={props.class}>
               <figure className='title'>
                    <figcaption className='leading-3 whitespace-nowrap'>
                         <span>{props.first}</span>
                         <span class="font-serif block text-3xl text-gold">{props.second}</span>
                    </figcaption>
               </figure>
          </div>
     )
}

export default SectionTitle