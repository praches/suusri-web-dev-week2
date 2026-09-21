import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Specials from './components/Specials'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Reservation from './components/Reservation'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './styles/theme.css'

function App() {
  const [reserveOpen, setReserveOpen] = useState(false)
  const openReserve = () => setReserveOpen(true)
  const closeReserve = () => setReserveOpen(false)

  return (
    <>
      <Navbar onReserve={openReserve} />
      <main>
        <Hero onReserve={openReserve} />
        <About />
        <Menu />
        <Specials />
        <Gallery />
        <Reviews />
        <Location onReserve={openReserve} />
      </main>
      <Footer />
      <BackToTop />
      <Reservation open={reserveOpen} onClose={closeReserve} />
    </>
  )
}

export default App
