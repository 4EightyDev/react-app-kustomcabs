import React from 'react';
import { Header, Footer } from './components'
import { Route, Routes } from 'react-router-dom'
import { Home, OurStory, OurTeam, Faq, ContactUs, OurServices} from './pages'

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
               </Routes>
               <Footer />
          </div>
     );
}

export default App;
