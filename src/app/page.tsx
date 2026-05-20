import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import StatsBar from '@/components/StatsBar'
import ServicesOverview from '@/components/ServicesOverview'
import ProductsShowcase from '@/components/ProductsShowcase'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import VideoSection from '@/components/VideoSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <StatsBar />
      <ProductsShowcase />
      <ServicesOverview />
      <WhyChooseUs />
      <VideoSection />
      <Testimonials />
      <CTASection />
    </>
  )
}
