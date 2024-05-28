import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';

import Accueil from './pages/Accueil';
import Map from './pages/Map';
import { Browser } from 'leaflet';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>      
      <div className='bg-slate-300'>
        {/* <Header /> */}
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
