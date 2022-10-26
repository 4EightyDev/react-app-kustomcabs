import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faPhone } from '@fortawesome/pro-solid-svg-icons'
import { faEnvelope } from '@fortawesome/pro-light-svg-icons'
import Button from '../components/modules/Button'
import { contacts } from '../constants'

const ContactUs = () => {
     return (
          <div className="relative bg-white">
               <h2 className="sr-only">Contact us</h2>

               <div className="grid grid-cols-1 lg:grid-cols-3">
                    {/* Contact information */}
                    <div className="relative bg-gray-dark py-10 px-6 sm:px-10 xl:p-12">
                         <div className='md:sticky md:top-[calc(100px+3rem)]'>
                              <h1 className='font-serif text-3xl pl-2 pb-1 border-l-4 border-gold text-white leading-none'>Contact Us</h1>
                              <p className="mt-6 max-w-3xl text-white">
                                   Contact us today to talk about your project.
                              </p>
                              <dl className="mt-8 space-y-6">
                                   <dt>
                                        <span className="sr-only">Phone number</span>
                                   </dt>
                                   <dd className="flex items-center text-base text-white">
                                        <FontAwesomeIcon className="text-gold" aria-hidden="true" icon={faPhone} />
                                        {contacts.map((contact) => (
                                             <span className="ml-3">{contact.phoneSales}</span>
                                        ))}
                                   </dd>
                                   <dt>
                                        <span className="sr-only">Email</span>
                                   </dt>
                                   <dd className="flex items-center text-base text-white">
                                        <FontAwesomeIcon className="text-gold" icon={faEnvelope} aria-hidden="true" />
                                        {contacts.map((contact) => (
                                             <span className="ml-3">{contact.emailSales}</span>
                                        ))}
                                   </dd>
                              </dl>
                         </div>
                    </div>

                    {/* Contact form */}
                    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                         <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
                         <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                              <div>
                                   <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                        First name
                                   </label>
                                   <div className="mt-1">
                                        <input
                                             type="text"
                                             name="first-name"
                                             id="first-name"
                                             autoComplete="given-name"
                                             className="block w-full rounded-full border-gray-200 py-3 px-4 text-gray-900 shadow-sm focus:border-gold focus:ring-gray-100 transition-all"
                                        />
                                   </div>
                              </div>
                              <div>
                                   <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                                        Last name
                                   </label>
                                   <div className="mt-1">
                                        <input
                                             type="text"
                                             name="last-name"
                                             id="last-name"
                                             autoComplete="family-name"
                                             className="block w-full rounded-full border-gray-200 py-3 px-4 text-gray-900 shadow-sm focus:border-gold focus:ring-gray-100 transition-all"
                                        />
                                   </div>
                              </div>
                              <div>
                                   <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                        Email
                                   </label>
                                   <div className="mt-1">
                                        <input
                                             id="email"
                                             name="email"
                                             type="email"
                                             autoComplete="email"
                                             className="block w-full rounded-full border-gray-200 py-3 px-4 text-gray-900 shadow-sm focus:border-gold focus:ring-gray-100 transition-all"
                                        />
                                   </div>
                              </div>
                              <div>
                                   <div className="flex justify-between">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                             Phone
                                        </label>
                                   </div>
                                   <div className="mt-1">
                                        <input
                                             type="text"
                                             name="phone"
                                             id="phone"
                                             autoComplete="tel"
                                             className="block w-full rounded-full border-gray-200 py-3 px-4 text-gray-900 shadow-sm focus:border-gold focus:ring-gray-100 transition-all"
                                             aria-describedby="phone-optional"
                                        />
                                   </div>
                              </div>
                              <div className="sm:col-span-2">
                                   <div className="flex justify-between">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                             Message
                                        </label>
                                        <span id="message-max" className="text-sm text-gray-500">
                                             Max. 500 characters
                                        </span>
                                   </div>
                                   <div className="mt-1">
                                        <textarea
                                             id="message"
                                             name="message"
                                             rows={4}
                                             className="block w-full rounded-xl border-gray-200 py-3 px-4 text-gray-900 shadow-sm focus:border-gold focus:ring-gray-100 transition-all"
                                             aria-describedby="message-max"
                                             defaultValue={''}
                                        />
                                   </div>
                              </div>
                              <div className="sm:col-span-2 sm:flex sm:justify-end">
                                   <Button type='submit' icon={faPaperPlane} text='Send Form' />
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     )
}

export default ContactUs