// React router
import { Routes, Route } from 'react-router-dom';


// Components
import HeroSection from './components/HeroSection'

import Main from './components/Main'

import './App.css'

function App() {


  return (
      <Routes>
        <Route path="/" element={<HeroSection />}/>
        <Route path="main" element={<Main />}/>
      </Routes>
  )
}

export default App
