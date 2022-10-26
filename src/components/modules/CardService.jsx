import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/pro-light-svg-icons'

const CardService = (props) => {
     return (
          <figure className='
               relative overflow-hidden group
               before:w-px before:h-[calc(100%-1rem)] hover:before:h-[calc(100%-4rem)] before:absolute before:right-3 before:top-[.8rem] hover:before:top-[1rem] before:bg-white before:transition-all before:duration-300
               after:h-px after:w-[calc(100%-1rem)] after:hover:w-[calc(100%-4rem)] after:hover:left-[2rem] after:absolute after:bottom-3 after:left-[.8rem] after:bg-white after:transition-all after:duration-300
          '>

               <a className='absolute w-full h-full left-0 top-0 z-10' href={props.link} title={props.category}></a>
               <img src={props.img} alt={props.category} />
               <figcaption className='absolute top-0 left-0 w-full h-full'>
                    <p className='font-serif text-bold flex absolute right-0 bottom-0 mb-6 mr-6 leading-3 text-white text-lg lg:text-xl'>
                         {props.category}
                         <FontAwesomeIcon icon={faArrowRightLong} className='ml-2 w-0 overflow-hidden group-hover:overflow-auto group-hover:w-[20px] transition-all duration-300' />
                    </p>
               </figcaption>
          </figure>
     )
}

export default CardService