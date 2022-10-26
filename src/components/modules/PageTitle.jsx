import React from 'react'

const PageTitle = (props) => {
     return (
          <section className="bg-gray-lighter p-4 w-full md:sticky top-[100px] left-[100px] md:z-50">
               <div className="container-2xl">
                    <h1 className='font-serif text-3xl pl-2 pb-1 border-l-4 border-gold leading-none'>{props.title}</h1>
               </div>
          </section>
     )
}

export default PageTitle