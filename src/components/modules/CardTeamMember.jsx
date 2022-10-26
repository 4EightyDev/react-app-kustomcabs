import React from 'react'

const CardTeamMember = (props) => {
     return (
          <figure class="team-member flex-center flex-col text-center">
               <img src={props.img} alt={props.name} className='bg-white border-8 border-white -mb-[60px] max-w-[90%] z-30' />
               <figcaption class="member-info p-4 pt-[60px] w-full bg-white border">
                    <h4 class="font-serif text-2xl">{props.name}</h4>
                    <p class="text-sm text-gold uppercase tracking-wide">{props.position}</p>
               </figcaption>
          </figure>
     )
}

export default CardTeamMember