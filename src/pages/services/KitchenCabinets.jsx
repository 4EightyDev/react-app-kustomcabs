import React from 'react';
import { Helmet } from 'react-helmet';
import { PageTitle } from '../../components';

const KitchenCabinets = () => {
     return (
          <>
               <Helmet>
                    <title>
                         Kustomcabs&#8482; | Custom Kitchen Cabinet Makers
                         serving Chandler AZ
                    </title>
                    <meta
                         name='description'
                         content='Serving the Phoenix/Chandler, AZ, areas with high-end custom kitchen cabinetry. We are experts in kitchen cabinetry design, refinishing, and installation.'
                    />
               </Helmet>
               <PageTitle title='Kitchen Cabinetry' />
               <section className='hero bg-kitchen bg-bottom bg-no-repeat w-full h-[500px] md:h-[600px]'></section>
               <section id='content'>
                    <div className='container grid grid-cols-12'>
                         <div className='col-span-12 md:col-span-6 p-3 lg:p-6 xl:p-8'>
                              <h2 className='font-serif text-gold mb-3 text-2xl'>
                                   Phoenix, AZ Custom Kitchen Cabinetry Makers
                              </h2>
                              <p className='mb-3'>
                                   Everyone knows that the kitchen is the
                                   home&#39;s heart, making it the most critical
                                   room. Remodeling your kitchen can be
                                   stressful; however, nothing beats the feeling
                                   of finally having the kitchen of your dreams.
                                   While our team at Kustomcabs is proud to make
                                   some of the best high-end cabinets on the
                                   market, we are even more proud of our ability
                                   to simplify the kitchen remodel process. We
                                   can transform your kitchen by adding form,
                                   function, and beauty. With a wide selection
                                   of luxury kitchen cabinetry, our expert team
                                   and detail-oriented designers can provide you
                                   with a beautiful space that fits you.
                              </p>
                         </div>
                         <div className='col-span-12 md:col-span-6 p-3 lg:p-6 xl:p-8'>
                              <h2 className='font-serif text-gold mb-3 text-2xl'>
                                   The Luxury Custom Kitchen Cabinetry of your
                                   Dreams
                              </h2>
                              <p className='mb-3'>
                                   When you&#39;re ready to start, we will meet
                                   with you to discuss the project, designs, and
                                   materials to make this vision a reality. We
                                   bring a wide variety of materials, finish
                                   samples and ideas on how to use them that
                                   expand the possibilities in the creative
                                   process. We take the time to put your vision
                                   on paper, letting you see your design take
                                   shape and the potential cost required to
                                   complete the project.
                              </p>
                         </div>
                         <div className='col-span-12 md:col-span-6 p-3 lg:p-6 xl:p-8'>
                              <h2 className='font-serif text-gold mb-3 text-2xl'>
                                   How much will a custom kitchen cabinetry
                                   cost?
                              </h2>
                              <p className='mb-3'>
                                   We aim to be upfront and honest with our
                                   customers from the first meeting to the final
                                   reveal. We want you to feel included in the
                                   loop; the only surprise you should have is
                                   how good the final product looks. Even if you
                                   want to recreate the look of something
                                   already in your space, we can match your
                                   existing finishes so that the new piece fits
                                   in seamlessly, as if it were always there! If
                                   you would like to learn how our cabinet
                                   design team can help simplify your kitchen
                                   remodel,{' '}
                                   <a href='tel:4804857744' title='Contact Us'>
                                        reach out
                                   </a>{' '}
                                   to us today! We look forward to working with
                                   you.
                              </p>
                         </div>
                         <div className='col-span-12 md:col-span-6 p-3 lg:p-6 xl:p-8'>
                              <h2 className='font-serif text-gold mb-3 text-2xl'>
                                   Serving Chandler, AZ, and the Greater Phoenix
                                   Area
                              </h2>
                              <p className='mb-3'>
                                   When you&#39;re ready to begin making the
                                   high-end kitchen of your dreams, the first
                                   step is to get a free quote from our
                                   experienced kitchen cabinetry experts. From
                                   our base of operations in Chandler, AZ, to
                                   the East Valley, to the greater Phoenix area,
                                   our goal is to make your dream kitchen a
                                   reality. With no stress and no surprises. We
                                   will provide a quality kitchen cabinetry
                                   installation that will last for years.
                              </p>
                         </div>
                    </div>
               </section>
          </>
     );
};

export default KitchenCabinets;
