import { faFilePen } from "@fortawesome/pro-regular-svg-icons"
import { Button, PageTitle } from "../components"
import {contacts} from '../constants'

const faqs = [
     {
          question: "What is your lead time?",
          answer:
               "Depending on your cabinet needs, we offer lead times anywhere from 6 -18 weeks.",
     },
     {
          question: "Do you use your own installers?",
          answer:
               "Kustomcabs LLC employs custom cabinet installers with the same craftsmanship of those who handcraft our custom cabinetry. We also team up with some of the best installation teams in the valley to assure fast service combined with quality installations.",
     },
     {
          question: "Can we save our existing cabinets/countertops?",
          answer:
               "Often times your cabinets can be refinished to bring a new and fresh look to your existing kitchen. We use furniture-grade spray equipment and a state-of-the-art cabinetry spray booth for laying down the best lacquer finishes available.",
     },
     {
          question: "Do you reface or refinish? What's the difference?",
          answer:
               "We offer both, top quality refinishes and/or refacing. Refinishing is recoating your existing cabinets with a high-quality furniture grade lacquer finish. Refacing can be as simple as replacing your existing doors and drawer-fronts with a fresh new style, or even adding new wood veneer to the existing cabinet boxes to completely change the wood species. The latter is a more tedious and expensive process (when done right). We usually recommend replacing the cabinets with one of our new and updated cabinet lines.",
     },
     {
          question: "Where do your cabinets come from? All custom? Do you order them?",
          answer:
               "Kustomcabs LLC handcrafts a full line of custom frameless and face-framed luxury cabinetry designed and built in our Chandler location. We also partner with multiple quality cabinetry lines to accommodate most budgets.",
     },
     {
          question: "Do you use plywood or particleboard? What's the difference?",
          answer:
               "Depending on the needs of our customers we offer both plywood and high-quality furniture-board construction. Plywood is lighter weight yet very durable and allows for a finished real-wood interior. Furniture-board is heavier and offers greater stability in our frameless construction. While we do offer both plywood and furniture-board in our frameless line, we are confident that our customers will enjoy long-lasting durability with either choice.",
     },
     {
          question: "Face-framed or Frameless cabinets? What's the difference??",
          answer:
               "Kustomcabs LLC offers both Frameless and Face-Framed cabinetry. Face-framed cabinetry has been the American-Standard of cabinetry many years. When built properly you will enjoy years of stability and furniture quality beauty with your Face-framed cabinets. The frames are often part of the face of the cabinets and can be seen between the doors and drawer-fronts. Many framed cabinets are made with the door and drawer-front fully overlaying the frame, showing more of the door, and revealing less of the face-frame. Frameless cabinets, which are a European standard, rely on a full over-lay door and drawer-front, as they have no face-frame to reveal. The face of the box is edged with the same material as the sides of the box and finished to match. Because of the full overlay offering in framed cabinet lines, there is little difference in the overall look of framed verses frameless, but you could argue that frameless cabinets offer a more accessible cabinet interior with larger drawers for up to 18% added space.",
     },
]

export default function Faq() {
     return (
          <div className="bg-white">
               <PageTitle title='Frequently Asked Questions' />
               <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                         <div className='h-[max-content] lg:sticky top-[200px]'>
                              <h2 className="font-serif text-gold text-4xl">How can we help?</h2>
                              <p className="mt-4 text-lg text-gray-dark">Can't find the answer you're looking for? Reach out to our
                                   {contacts.map((contact) => (
                                        <a href={contact.hrefphone} className="font-medium text-gray-dark hover:text-gold">{' '}sales team.</a>
                                   ))}
                              </p>
                              <Button href='/free-quote' icon={faFilePen} text='Get A Free Quote' className='font-serif mt-6' />
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
