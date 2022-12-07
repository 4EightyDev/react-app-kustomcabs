import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../../constants';

const Socialbar = () => {
     return (
          <div
               id='socialBar'
               className='relative bg-white dark:bg-gray-darker grow flex flex-col'
          >
               <ul className='flex flex-col grow items-center space-around [&>*]:grow [&>*]:flex-center [%>*]:relative z-10'>
                    {socialLinks.map((item) => (
                         <li className='[&>*]:hover:flex'>
                              <span className='absolute whitespace-nowrap bg-gray-darker text-white py-2 px-4 text-sm rounded-lg left-[80px] hidden'>
                                   {item.name}
                              </span>
                              <Link
                                   to={item.href}
                                   target='_blank'
                                   title={item.name}
                                   className='bg-gray-darker text-gold hover:text-white dark:text-white border-2 dark:border-1 border-gold dark:border-neutral-700 ring-8 ring-white dark:ring-gray-darker w-[50px] h-[50px] flex-center rounded-full transition-all'
                              >
                                   <i className={item.icon}></i>
                              </Link>
                         </li>
                    ))}
               </ul>
               <span className='absolute w-px h-full left-1/2 bg-neutral-400/50 dark:bg-neutral-700/50 z-0s'></span>
          </div>
     );
};

export default Socialbar;
