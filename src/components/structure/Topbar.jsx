import React from 'react'
import { Logo, SectionTitle, Button } from '../'
import { faPhone } from '@fortawesome/pro-light-svg-icons'
import { contacts } from '../../constants'

const Topbar = () => {
     return (
          <div id='topBar' className='fixed top-0 left-[75px] md:left-[100px] pr-4 w-[calc(100%-75px)] md:w-[calc(100%-100px)] bg-white dark:bg-gray-dark z-50 flex-between sm:flex-around md:flex-between transition-all'>
               <div className='dark:bg-gray-darker h-[75px] md:h-[100px] flex-center px-4'>
                    <Logo />
               </div>
               <figure className='mx-auto hidden md:block'>
                    <a href='##' title='Request A Free Quote'>
                         <SectionTitle class='mr-3 md:mr-4 lg:mr-6 bg-white p-4 rounded-lg hover:shadow-2xl transition-all' first='Request A' second='Free Quote' />
                    </a>
               </figure>
               {contacts.map((contact) => (
                    <Button href={contact.hrefphone} icon={faPhone} text='(480) 485-7744' classText='last:hidden last:sm:inline' />
               ))}
          </div>
     )
}

export default Topbar