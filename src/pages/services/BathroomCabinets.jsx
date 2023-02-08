import React from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle } from '../../components';

const BathroomCabinets = () => {
     return (
          <>
               <Helmet>
                    <title>
                         Kustomcabs&#8482; | Residential Bathroom Cabinetry
                         Phoenix Area
                    </title>
                    <meta
                         name='description'
                         content='Chandler AZ based custom cabinetry makers. The luxurious bathroom of your dreams is waiting for you.'
                    />
               </Helmet>
               <PageTitle title='Bathroom Cabinetry' />
               <section className='hero bg-bathroom bg-bottom bg-no-repeat w-full h-[500px] md:h-[600px]'></section>
               <section id='content'>
                    <div className='container grid grid-cols-12'>
                         <div className='col-span-12 md:col-span-6 p-3 lg:p-6 xl:p-8'>
                              <h2 className='font-serif text-gold mb-3 text-2xl'>
                                   Phoenix, AZ Custom Bathroom Cabinetry Experts
                              </h2>
                              <p className='mb-3'>
                                   Would you like to update your worn, dated
                                   bathroom? Would you like to wake up to your
                                   refreshing oasis? Welcome to KustomCabs. We
                                   know that elegance and functionality are
                                   essential elements of any bathroom. Here at
                                   Kustomcabs, we have decades of experience and
                                   expertise in designing bathrooms with style
                                   and space for your daily life. Every bathroom
                                   needs to have a certain level of luxury and
                                   elegance. It is not just about the size or
                                   fixtures, but more important is the design
                                   elements that make it your little oasis. We
                                   will maximize comfort while increasing
                                   functionality to fit your needs.
                              </p>
                         </div>
                         <div className='col-span-12 md:col-span-6 p-3 lg:p-6 xl:p-8'>
                              <h2 className='font-serif text-gold mb-3 text-2xl'>
                                   How much is a custom bathroom?
                              </h2>
                              <p className='mb-3'>
                                   Your bathroom is more than just a room in
                                   your home. You can retreat from the world,
                                   relax, unwind, and prepare for the day ahead.
                                   So your bathroom is worth spending time
                                   designing and money on the right items for a
                                   bathroom that is just your style and suited
                                   for your personal needs. At Kustomcabs, we
                                   will walk you through the process while
                                   maintaining complete transparency, so there
                                   are no surprises.
                              </p>
                         </div>
                         <div className='col-span-12 md:col-span-6 p-3 lg:p-6 xl:p-8'>
                              <h2 className='font-serif text-gold mb-3 text-2xl'>
                                   Custom Bathroom Cabinetry Chandler AZ
                              </h2>
                              <p className='mb-3'>
                                   Our Kustomcabs team of licensed experts with
                                   decades of expertise and references to
                                   quality will design your custom bathroom. We
                                   will render 3D images to see what the
                                   bathroom of your dreams looks like before we
                                   build anything. With your style and to fit
                                   your lifestyle, our custom bathroom will
                                   bring your space, peace, and serenity. From
                                   modern designs to traditional looks, whenever
                                   you are ready, we will work on your schedule
                                   to find the perfect bathroom cabinetry.
                              </p>
                              <p className='mb-3'>
                                   It&#39;s not just about design; execution
                                   matters. From beginning to end, our team has
                                   you covered. Licensed professionals will
                                   perfectly install every project piece—zero
                                   compromises on every step.
                              </p>
                              <p className='mb-3'>
                                   Serving Chandler, AZ, and the Greater Phoenix
                                   Area, and we look forward to serving you. Get
                                   a free quote now!
                              </p>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default BathroomCabinets;
