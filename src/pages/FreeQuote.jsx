import React from 'react'
import { PageTitle } from '../components'
import JotformEmbed from 'react-jotform-embed';

const FreeQuote = () => {
     return (
          <div className='relative'>
               <PageTitle title='Request A Free Quote' />
               <div className='absolute h-[100px] bg-gray-lighter left-0 right-0 bottom-0 z-50'></div>
               <JotformEmbed src="https://form.jotformeu.com/222850841748058" />
          </div>
     )
}

export default FreeQuote