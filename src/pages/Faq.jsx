import { PageTitle } from "../components"
import {contacts} from '../constants'

const faqs = [
     {
          question: 'How do you make holy water?',
          answer:
               'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
     },
]

export default function Faq() {
     return (
          <div className="bg-white">
               <PageTitle title='Frequently Asked Questions' />
               <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                         <div>
                              <h2 className="font-serif text-gold text-4xl">How can we help?</h2>
                              <p className="mt-4 text-lg text-gray-dark">Can't find the answer you're looking for? Reach out to our
                                   {contacts.map((contact) => (
                                        <a href={contact.hrefphone} className="font-medium text-gray-dark hover:text-gold">{' '}sales team.</a>
                                   ))}
                              </p>
                         </div>
                         <div className="mt-12 lg:col-span-2 lg:mt-0">
                              <dl className="space-y-12">
                                   {faqs.map((faq) => (
                                        <div key={faq.question}>
                                             <dt className="text-lg font-medium leading-6 text-gray-dark">{faq.question}</dt>
                                             <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                                        </div>
                                   ))}
                              </dl>
                         </div>
                    </div>
               </div>
          </div>
     )
}
