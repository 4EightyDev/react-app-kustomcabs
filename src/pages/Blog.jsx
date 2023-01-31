import React from 'react';
import { PageTitle } from '../components';
import Posts from '../components/Posts';

export default function () {
     return (
          <div className='bg-white dark:bg-gray-dark dark:text-white flex-center flex-col'>
               <PageTitle title='Blog' />
               <section className='w-full'>
                    <div className='container-2xl md:flex'>
                         <Posts />
                    </div>
               </section>
          </div>
     );
}
