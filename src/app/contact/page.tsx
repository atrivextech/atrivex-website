import { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Contact Us - Atrivex Technology',
  description: 'Get in touch with Atrivex Technology. We are here to help with your technology needs.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Let&apos;s discuss how we can help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">sales@atrivextech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+91 8884244422</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    #07, Bhuvaneshwari Layout B Cross<br />
                    Nagnathpura Hosa Road<br />
                    Bengaluru-560100<br />
                    Karnataka, India
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-4">Our Bengaluru Location</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Atrivex Technology Pvt. Limited is located in the southern part of India, in the state of Karnataka. The capital city, Bengaluru (Bangalore), is widely known as the “Silicon Valley of India” due to its strong technology industry and vibrant startup ecosystem.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mt-4">
                  Our office is situated near Electronic City, one of Bengaluru’s major IT hubs. Electronic City was originally developed in the late 1970s and has grown significantly since the 1990s with the rise of India’s IT industry.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 aspect-video">
                    <Image
                      src="/images/office-bengaluru-1.svg"
                      alt="Atrivex Bengaluru office location"
                      width={640}
                      height={420}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 aspect-video">
                    <Image
                      src="/images/office-bengaluru-2.svg"
                      alt="Atrivex Bengaluru office building"
                      width={640}
                      height={420}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
