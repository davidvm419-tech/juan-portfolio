// React router
import { Routes, Route } from 'react-router-dom';


// Components
import HeroSection from './components/general/HeroSection'

import Main from './components/general/Main'

import './App.css'

function App() {


  return (
      <Routes>
        <Route path="/" element={<HeroSection />}/>
        <Route path="main" element={<Main />}/>
        <Route path="project" element={<Main />}/>
      </Routes>
  )
}

export default App
