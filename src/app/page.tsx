import HeroSection from '@/components/HeroSection'
import ServicesOverview from '@/components/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import VideoSection from '@/components/VideoSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <VideoSection />
      <Testimonials />
      <CTASection />
    </>
  )
}
