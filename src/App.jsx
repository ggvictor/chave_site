import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {
 
  return (
    <div>
      <Navbar />
      <Hero/>
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
      )
}
export default App