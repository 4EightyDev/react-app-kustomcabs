import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
     faCommentsQuestion,
     faBarsSort,
     faBuilding,
     faPeopleGroup, faPencil,
} from '@fortawesome/pro-solid-svg-icons';

import { NavLinks } from '../';

const navigation = [
     { name: 'Our Story', href: '/our-story', icon: faBuilding },
     { name: 'Our Team', href: '/our-team', icon: faPeopleGroup },
     {
          name: 'Frequenty Asked Questions',
          href: '/faq',
          icon: faCommentsQuestion,
     },
     { name: 'Kustomcabs Connection Blog', href: '/blog', icon: faPencil },
];
const secondaryNavigation = [
     { name: 'Kitchen Cabinetry', href: '/services/kitchen-cabinetry' },
     { name: 'Bathroom Cabinetry', href: '/services/bathroom-cabinetry' },
     { name: 'Home Office Cabinetry', href: '/services' },
     { name: 'Laundry Room Cabinetry', href: '/services' },
     { name: 'Refacing & Refinishing', href: '/services' },
];

function classNames(...classes) {
     return classes.filter(Boolean).join(' ');
}

const Menu = () => {
     let [isOpen, setIsOpen] = useState(false);

     function closeModal() {
          setIsOpen(false);
     }

     function openModal() {
          setIsOpen(true);
     }

     return (
          <div id='Menu'>
               <button
                    type='button'
                    onClick={openModal}
                    className='bg-gray-darker translate-x-[150px] sm:translate-x-0 w-full h-[75px] md:h-[100px] flex-center relative cursor-pointer transition-all'
               >
                    <FontAwesomeIcon
                         icon={faBarsSort}
                         className='text-[1.6rem] absolute top-[1rem] md:top-[1.6rem] text-white transition-all'
                    />
                    <div className='text-gold text-sm absolute bottom-[.6rem] md:bottom-[1.2rem] transition-all'>
                         Menu
                    </div>
               </button>
               <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                         as='div'
                         className='relative z-50'
                         onClose={closeModal}
                    >
                         <Transition.Child
                              as={Fragment}
                              enter='ease-out duration-300'
                              enterFrom='opacity-0'
                              enterTo='opacity-100'
                              leave='ease-in duration-200'
                              leaveFrom='opacity-100'
                              leaveTo='opacity-0'
                         >
                              <div className='fixed inset-0 bg-white/50 dark:bg-gray-darker/70' />
                         </Transition.Child>

                         <div className='fixed inset-0 overflow-y-auto z-[9999]'>
                              <div className='flex h-full w-100 items-center justify-center p-4 text-center'>
                                   <Transition.Child
                                        as={Fragment}
                                        enter='ease-out duration-300'
                                        enterFrom='opacity-0 scale-95'
                                        enterTo='opacity-100 scale-100'
                                        leave='ease-in duration-200'
                                        leaveFrom='opacity-100 scale-100'
                                        leaveTo='opacity-0 scale-95'
                                   >
                                        <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-xl bg-gray-darker align-middle shadow-2xl transition-all'>
                                             <nav aria-label='Sidebar'>
                                                  <div className='space-y-1 p-6 pb-0'>
                                                       {navigation.map(
                                                            (item) => (
                                                                 <Link
                                                                      onClick={
                                                                           closeModal
                                                                      }
                                                                      key={
                                                                           item.name
                                                                      }
                                                                      to={
                                                                           item.href
                                                                      }
                                                                      className={classNames(
                                                                           item.current
                                                                                ? 'bg-blue-500'
                                                                                : 'text-white hover:bg-white/5',
                                                                           'group flex items-center px-3 py-2 font-medium rounded-md [&>*]:fill-gold'
                                                                      )}
                                                                      aria-current={
                                                                           item.current
                                                                                ? 'page'
                                                                                : undefined
                                                                      }
                                                                 >
                                                                      <FontAwesomeIcon
                                                                           icon={
                                                                                item.icon
                                                                           }
                                                                           className={classNames(
                                                                                item.current
                                                                                     ? 'text-gold'
                                                                                     : 'text-gold',
                                                                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                                                           )}
                                                                           aria-hidden='true'
                                                                      />
                                                                      <span className='truncate'>
                                                                           {
                                                                                item.name
                                                                           }
                                                                      </span>
                                                                 </Link>
                                                            )
                                                       )}
                                                  </div>
                                                  <div className='mt-8 bg-white p-6'>
                                                       <h3
                                                            className='px-3 font-serif text-lg lg:text-xl mb-3 text-left text-gold'
                                                            id='services-headline'
                                                       >
                                                            What We Do
                                                       </h3>
                                                       <div
                                                            className='mt-1 space-y-1'
                                                            aria-labelledby='services-headline'
                                                       >
                                                            {secondaryNavigation.map(
                                                                 (item) => (
                                                                      <Link
                                                                           key={
                                                                                item.name
                                                                           }
                                                                           to={
                                                                                item.href
                                                                           }
                                                                           className='group flex items-center rounded-md px-3 py-1 text-gray-dark text-sm hover:bg-gray-50 hover:text-gray-900'
                                                                      >
                                                                           <span className='truncate'>
                                                                                {
                                                                                     item.name
                                                                                }
                                                                           </span>
                                                                      </Link>
                                                                 )
                                                            )}
                                                       </div>
                                                  </div>
                                             </nav>
                                        </Dialog.Panel>
                                   </Transition.Child>
                              </div>
                         </div>
                    </Dialog>
               </Transition>
          </div>
     );
};

export default Menu;
