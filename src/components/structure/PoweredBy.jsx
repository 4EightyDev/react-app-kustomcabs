import React from 'react'

const PoweredBy = () => {
     return (
          <section id='PoweredBy' className='relative bg-neutral-800 text-white grow flex-center short:hidden'>
               <a class="absolute w-full h-full z-10 left-0 top-0" href="https://www.facebook.com/4EightyDesign" target="_blank"></a>
               <span className='-rotate-90 whitespace-nowrap text-[10px]'>
                    <i class="fa-solid fa-power-off text-gold mr-1"></i>Powered By
                    <span class="text-gold ml-1">
                         4Eighty Design</span>
                    <sup><i class="fa-solid fa-trademark mt-2"></i></sup>
               </span>
          </section>
     )
}

export default PoweredBy