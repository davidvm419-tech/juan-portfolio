// React router
import { Routes, Route } from 'react-router-dom';


// Components
import HeroSection from './components/general/HeroSection'
import Main from './components/general/Main'
import ProjectDetails from './components/projects/ProjectDetails';

import './App.css'

function App() {


  return (
      <Routes>
        <Route path="/" element={<HeroSection />}/>
        <Route path="main" element={<Main />}/>
        <Route path="project/:id" element={<ProjectDetails />}/>
        <Route path="*" element={<HeroSection />}/>
      </Routes>
  )
}

export default App
