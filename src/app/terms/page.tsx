import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Atrivex Technology',
  description: 'Terms of Service for Atrivex Technology Private Limited website and services.',
}

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm">Last updated: May 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">1. Overview</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the website atrivextech.com and any
              services provided by Atrivex Technology Private Limited (&quot;AtriVex&quot;, &quot;we&quot;, &quot;us&quot;),
              a company registered in Bengaluru, India.
            </p>
            <p>By accessing our website, you agree to these Terms. If you do not agree, please do not use the website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">2. Services</h2>
            <p>
              AtriVex provides technology services including software development, AI solutions, cloud services,
              digitization, and software products. Specific product terms are governed by separate agreements
              signed at the time of purchase or subscription.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, icons, images, and software — is the
              property of AtriVex Technology Private Limited and is protected by Indian and international copyright,
              trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from any content on this
              website without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">4. Use of the Website</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the website or its systems</li>
              <li>Transmit malware, spam, or any harmful code</li>
              <li>Scrape or collect data from the website using automated means without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">5. Contact Form &amp; Communications</h2>
            <p>
              When you submit a contact form, you consent to being contacted by AtriVex regarding your enquiry.
              We will not add you to marketing lists without separate, explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">6. Disclaimer</h2>
            <p>
              The website and its content are provided &quot;as is&quot; without warranties of any kind, either express
              or implied. AtriVex does not guarantee that the website will be uninterrupted, error-free, or free
              of harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, AtriVex shall not be liable for any indirect, incidental,
              special, or consequential damages arising from your use of the website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content,
              privacy practices, or availability of those sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">9. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of India. Any disputes
              shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">10. Changes</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes take effect when posted on this page.
              Your continued use of the website constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">11. Contact</h2>
            <p>
              For questions about these Terms:<br />
              Atrivex Technology Private Limited<br />
              Site No. 7, Bhuvaneshwari Layout B, Nagnathpura<br />
              Bengaluru 560100, Karnataka, India<br />
              Email: <a href="mailto:sales@atrivextech.com" className="text-primary-600 dark:text-primary-400 hover:underline">sales@atrivextech.com</a>
            </p>
          </section>
        </div>

        <div className="pt-6 mt-10 border-t border-gray-200 dark:border-gray-800 flex gap-6 text-sm">
          <Link href="/impressum" className="text-primary-600 dark:text-primary-400 hover:underline">Impressum</Link>
          <Link href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  )
}
