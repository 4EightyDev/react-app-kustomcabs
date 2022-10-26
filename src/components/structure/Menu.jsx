import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsSort } from '@fortawesome/pro-light-svg-icons'
import { NavLinks } from '../'

const Menu = () => {
     let [isOpen, setIsOpen] = useState(false)

     function closeModal() {
          setIsOpen(false)
     }

     function openModal() {
          setIsOpen(true)
     }

     return (
          <div id='Menu'>
               <button type='button' onClick={openModal} className='bg-gray-darker translate-x-[150px] sm:translate-x-0 w-full h-[75px] md:h-[100px] flex-center relative cursor-pointer transition-all'>
                    <FontAwesomeIcon icon={faBarsSort} className='text-[1.6rem] absolute top-[1rem] md:top-[1.6rem] text-white transition-all' />
                    <div className="text-gold text-sm absolute bottom-[.6rem] md:bottom-[1.2rem] transition-all">Menu</div>
               </button>
               <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50" onClose={closeModal}>
                         <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                         >
                              <div className="fixed inset-0 bg-white/50 dark:bg-gray-darker/70" />
                         </Transition.Child>

                         <div className="fixed inset-0 overflow-y-auto z-[9999]">
                              <div className="flex h-full w-100 items-center justify-center p-4 text-center">
                                   <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                   >
                                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-gray-darker align-middle shadow-2xl transition-all">
                                             <NavLinks />
                                        </Dialog.Panel>
                                   </Transition.Child>
                              </div>
                         </div>
                    </Dialog>
               </Transition>
          </div>
     )
}


export default Menu