import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesOverview from './components/ServicesOverview'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default App
