import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '..';
import { contacts } from '../../constants';

const App = () => {
     console.log(new Date().getFullYear());

     return <>{new Date().getFullYear()}</>;
};

const navigation = {
     main: [
          { name: 'Kitchen Cabinetry', href: '/services/kitchen-cabinetry' },
          { name: 'Bathroom Cabinetry', href: '/services/bathroom-cabinetry' },
          { name: 'Our Story', href: '/our-story' },
          { name: 'Our Team', href: '/our-team' },
          { name: 'Frequently Asked Questions', href: '/faq' },
         /* { name: 'Blog', href: '/blog' }, */

     ],
};

const Footer = () => {
     return (
          <footer className='bg-gray-darker/95 dark mt-auto bg-gray-lighter'>
               <div className='mx-auto max-w-7xl overflow-hidden pt-10 pb-6 px-4 sm:px-6 lg:px-8'>
                    <div className='flex-center flex-col mb-6'>
                         <Logo />
                         <div className='flex-center pt-4'>
                              <p className='text-neutral-500 font-bold p-2'>
                                   ROC B03 #0322917
                              </p>
                              {contacts.map((contact) => (
                                   <a
                                        className='text-white p-2'
                                        href={contact.hrefphone}
                                        title={contact.phoneSales}
                                   >
                                        {contact.phoneSales}
                                   </a>
                              ))}
                         </div>
                    </div>
                    <nav
                         className='flex flex-wrap justify-center'
                         aria-label='Footer'
                    >
                         {navigation.main.map((item) => (
                              <div key={item.name} className='px-3 py-2'>
                                   <Link
                                        to={item.href}
                                        className='text-sm text-neutral-500 hover:text-white transition-all'
                                   >
                                        {item.name}
                                   </Link>
                              </div>
                         ))}
                    </nav>
               </div>
               <div className='bg-gray-darker p-3'>
                    <p className='text-center text-white text-xs'>
                         &copy; {new Date().getFullYear()} Kustomcabs, LLC. All
                         rights reserved.
                    </p>
               </div>
          </footer>
     );
};

export default Footer;
