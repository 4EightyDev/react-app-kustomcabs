import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faPeopleGroup } from "@fortawesome/pro-solid-svg-icons"
import { faPhoneAlt, faCommentsQuestion } from "@fortawesome/pro-light-svg-icons"

const navigation = [
     { name: 'Our Story', href: '/our-story', icon: faBuilding },
     { name: 'Our Team', href: '/our-team', icon: faPeopleGroup },
     { name: 'Frequenty Asked Questions', href: '/faq', icon: faCommentsQuestion },
     { name: 'Contact Us', href: '/contact-us', icon: faPhoneAlt },
]
const secondaryNavigation = [
     { name: 'Kitchen Cabinetry', href: '/services' },
     { name: 'Bathroom Cabinetry', href: '/services' },
     { name: 'Home Office Cabinetry', href: '/services' },
     { name: 'Laundry Room Cabinetry', href: '/services' },
     { name: 'Refacing & Refinishing', href: '/services' },
]

function classNames(...classes) {
     return classes.filter(Boolean).join(' ')
}

const NavLinks = () => {
     return (
          <nav aria-label="Sidebar">
               <div className="space-y-1 p-6 pb-0">
                    {navigation.map((item) => (
                         <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                   item.current ? 'bg-blue-500' : 'text-white hover:bg-white/5',
                                   'group flex items-center px-3 py-2 font-medium rounded-md [&>*]:fill-gold'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                         >
                              <FontAwesomeIcon icon={item.icon} className={classNames(
                                   item.current ? 'text-gold' : 'text-gold',
                                   'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                              )} aria-hidden='true' />
                              <span className="truncate">{item.name}</span>
                         </a>
                    ))}
               </div>
               <div className="mt-8 bg-white p-6">
                    <h3 className="px-3 font-serif text-lg lg:text-xl mb-3 text-left text-gold" id="services-headline">
                         What We Do
                    </h3>
                    <div className="mt-1 space-y-1" aria-labelledby="services-headline">
                         {secondaryNavigation.map((item) => (
                              <a
                                   key={item.name}
                                   href={item.href}
                                   className="group flex items-center rounded-md px-3 py-1 text-gray-dark text-sm hover:bg-gray-50 hover:text-gray-900"
                              >
                                   <span className="truncate">{item.name}</span>
                              </a>
                         ))}
                    </div>
               </div>
          </nav>
     )
}

export default NavLinks