import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ResourcesPage from './pages/ResourcesPage.jsx'
import SimulationGame from './pages/SimulationGame.jsx'
import AISimulation from './pages/AISimulation.jsx'

export default function App() {
  return (
    <div id="home" className="min-h-dvh relative overflow-x-hidden bg-cosmic-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/game" element={<SimulationGame />} />
        <Route path="/ai" element={<AISimulation />} />
      </Routes>
      <Footer />  
    </div>
  )
}
