import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Atrivex Technology',
  description: 'Learn about Atrivex Technology, our mission, vision, and the team behind innovative technology solutions.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About Atrivex</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            To empower businesses with innovative technology solutions that drive growth, 
            efficiency, and digital transformation in an ever-evolving technological landscape.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Atrivex Technology Pvt. Limited is located in the southern part of India, in the state of Karnataka. The capital city, Bengaluru (Bangalore), is widely known as the “Silicon Valley of India” due to its strong technology industry and vibrant startup ecosystem.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mt-4">
            Our office is situated near Electronic City, one of Bengaluru’s major IT hubs. Electronic City was originally developed in the late 1970s and has grown significantly since the 1990s with the rise of India’s IT industry.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            To be the leading technology partner for businesses worldwide, recognized for 
            excellence in software development, AI innovation, and customer success.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Core Values</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
            <li><strong>Innovation:</strong> Continuously pushing boundaries with cutting-edge solutions</li>
            <li><strong>Excellence:</strong> Delivering quality in every project we undertake</li>
            <li><strong>Integrity:</strong> Building trust through transparency and honesty</li>
            <li><strong>Collaboration:</strong> Working closely with clients as true partners</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
