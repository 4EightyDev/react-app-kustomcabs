import React from 'react'
import { Menu, Socialbar, PoweredBy } from '../.'

const Sidebar = () => {
     return (
          <aside className='fixed flex flex-col h-screen w-[75px] md:w-[100px] translate-x-[-150px] sm:translate-x-[-75px] md:translate-x-[-100px] translate-y-[-75px] md:translate-y-[-100px] z-40 transition-all'>
               <Menu />
               <Socialbar />
               <PoweredBy />
          </aside>
     )
}

export default Sidebar