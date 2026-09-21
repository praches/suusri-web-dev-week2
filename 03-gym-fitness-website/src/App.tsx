import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Facilities from './components/Facilities'
import Testimonials from './components/Testimonials'
import BMICalculator from './components/BMICalculator'
import Schedule from './components/Schedule'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/theme.css'

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Pricing />
        <Facilities />
        <Testimonials />
        <BMICalculator />
        <Schedule />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
