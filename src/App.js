import React from 'react';
import { Header, Footer } from './components';
import { Route, Routes } from 'react-router-dom';
import {
     Home,
     OurStory,
     OurTeam,
     Faq,
     ContactUs,
     OurServices,
     FreeQuote,
     Post
} from './pages';
import KitchenCabinets from './pages/services/KitchenCabinets';
import BathroomCabinets from './pages/services/BathroomCabinets';

import TagManager from 'react-gtm-module';
import Blog from './pages/Blog';

const tagManagerArgs = {
     gtmId: 'GTM-TQWCSH6',
};

TagManager.initialize(tagManagerArgs);

const App = () => {
     return (
          <div className='min-h-screen text-base antialiased flex flex-col sm:pl-[75px] md:pl-[100px] pt-[75px] md:pt-[100px]'>
               <Header />
               <Routes>

                         <Route path='/' element={<Home />} />
                         <Route path='/our-story' element={<OurStory />} />
                         <Route path='/our-team' element={<OurTeam />} />
                         <Route path='/faq' element={<Faq />} />
                         <Route path='/contact-us' element={<ContactUs />} />
                         <Route path='/services' element={<OurServices />} />
                         <Route
                              path='/services/kitchen-cabinetry'
                              element={<KitchenCabinets />}
                         />
                         <Route
                              path='/services/bathroom-cabinetry'
                              element={<BathroomCabinets />}
                         />
                         <Route path='/free-quote' element={<FreeQuote />} />
                         <Route path='/blog' element={<Blog />} />
                         <Route path='/post/:id/:slug' element={<Post />} />

               </Routes>
               <Footer />
          </div>
     );
};

export default App;
