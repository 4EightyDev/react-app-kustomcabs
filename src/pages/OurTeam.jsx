import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { CardTeamMember, HeadingTeam } from '../components';
import { TeamBrandon, TeamChristine, TeamDave, TeamJoe, TeamJose, TeamMariah, TeamNick, TeamPaull, TeamScott, TeamThomas, TeamWill } from '../images'

const OurTeam = () => {
     return (
          <div className='bg-white dark:bg-gray-dark dark:text-white flex-center flex-col'>
               <section className="bg-gray-lighter py-8 w-full">
                    <div className="container">
                         <h1 className='font-serif text-4xl pl-2 pb-1 border-l-4 border-gold leading-none'>Our Team</h1>
                    </div>
               </section>
               <section className="py-16 w-full">
                    <div className="container">
                         <OwlCarousel className='owl-theme' nav={false} dots={true} margin={20} loop autoplay
                              responsive={
                                   {
                                        0: {
                                             items: 1
                                        },
                                        800: {
                                             items: 2
                                        },
                                        1024: {
                                             items: 3
                                        },
                                        1200: {
                                             items: 4
                                        }
                                   }
                              }>
                              <CardTeamMember name='Joe Swain' img={TeamJoe} position='Owner / Founder' />
                              <CardTeamMember name='Christine Siller' img={TeamChristine} position='POSITION' />
                              <CardTeamMember name='Mariah Gallegos' img={TeamMariah} position='Design Specialist / Product Manager' />
                              <CardTeamMember name="Will O'Fallon" img={TeamWill} position='Design Specialist' />
                              <CardTeamMember name='Scott Vance' img={TeamScott} position='Senior Cabinetmaker' />
                              <CardTeamMember name='Paull Wulffson' img={TeamPaull} position='Senior Cabinetmaker' />
                              <CardTeamMember name='Brandon Brian' img={TeamBrandon} position='Finisher' />
                              <CardTeamMember name='Nic Serra' img={TeamNick} position='Installation Manager' />
                              <CardTeamMember name='Jose Olivarria' img={TeamJose} position='Finisher' />
                              <CardTeamMember name='Dave West' img={TeamDave} position='Installer' />
                              <CardTeamMember name='Thomas Patch' img={TeamThomas} position='Assembler' />
                         </OwlCarousel>
                    </div>
               </section>
          </div>
     )
}

export default OurTeam