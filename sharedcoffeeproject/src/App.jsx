import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import Header from './elements/Header';
import Footer from './elements/Footer';

import Accueil from './pages/Accueil';
import Map from './pages/Map';
import Contact from './pages/Contact';
import Submitted from './pages/Submitted';
import Donate from './pages/Donate';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>      
      <div className='bg-[#f8ff74]'>
        <Header />
        <main>
          <Routes>  
            <Route path="/" element={<Accueil />} />
            <Route path="/map" element={<Map />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/submitted" element={<Submitted />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
