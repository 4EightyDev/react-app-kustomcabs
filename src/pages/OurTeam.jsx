import React from 'react'
import { CardTeamMember, PageTitle } from '../components';
import { TeamBrandon, TeamChristine, TeamDave, TeamJoe, TeamMariah, TeamNick, TeamPaull, TeamScott, TeamThomas, TeamWill } from '../images'

const OurTeam = () => {
     return (
          <div className='bg-white dark:bg-gray-dark dark:text-white flex-center flex-col'>
               <PageTitle title='Our Team' />
               <section className="w-full">
                    <div className="container-2xl md:flex">
                         <div className='md:w-1/2 lg:w-5/12 xl:w-1/3 pr-4 pl-2'>
                              <div className='sticky top-[185px]'>
                                   <CardTeamMember name='Joe Swain' img={TeamJoe} position='Owner / Founder' bio='With more than forty years of woodworking experience and a passion for quality, Joe has spent a lifetime developing his skills in the woodworking industry.' />
                              </div>
                         </div>
                         <div className='md:w-1/2 lg:w-7/12 xl:w-2/3 grid md:grid-cols-1 lg:grid-cols-2'>
                              <CardTeamMember name='Christine Siller' img={TeamChristine} position='Business Manager' />
                              <CardTeamMember name='Mariah Gallegos' img={TeamMariah} position='Design Specialist / Project Manager' />
                              <CardTeamMember name='Paull Wulffson' img={TeamPaull} position='Shop Manager' />
                              <CardTeamMember name='Nic Serra' img={TeamNick} position='Installation Manager' />
                              <CardTeamMember name="Will O'Fallon" img={TeamWill} position='Design Specialist' />
                              <CardTeamMember name='Scott Vance' img={TeamScott} position='Senior Cabinetmaker' />
                              <CardTeamMember name='Brandon Brian' img={TeamBrandon} position='Finish Specialist' />
                              <CardTeamMember name='Dave West' img={TeamDave} position='Installation Specialist' />
                              <CardTeamMember name='Thomas Patch' img={TeamThomas} position='Assembly Specialist' />
                         </div>
                    </div>
               </section>
          </div>
     )
}

export default OurTeam