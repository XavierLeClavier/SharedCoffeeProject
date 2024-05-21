import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Accueil from './pages/Accueil'
import Map from './pages/Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Map />
      </div>
    </>
  )
}

export default App