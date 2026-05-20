import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Atrivex Technology',
  description: 'Privacy Policy of Atrivex Technology Private Limited. How we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm">Last updated: May 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">1. Who We Are</h2>
            <p>
              Atrivex Technology Private Limited (&quot;AtriVex&quot;, &quot;we&quot;, &quot;us&quot;) is a technology company
              registered in Bengaluru, India (CIN: U62091KA2026PTC217478). This policy covers data collected
              through our website (atrivextech.com) and our products.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">2. What Data We Collect</h2>
            <p><strong>When you contact us:</strong> Name, email address, phone number, and message content submitted through our contact form.</p>
            <p><strong>When you visit our website:</strong> Standard web server logs (IP address, browser type, pages visited, timestamps). We do not use tracking cookies or third-party analytics that identify individual users.</p>
            <p><strong>When you use our products:</strong> Each product has its own data handling practices described in the product-specific terms. This policy covers the website only.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">3. How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to your enquiries and provide requested information</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
            <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">4. Legal Basis (GDPR)</h2>
            <p>For visitors in the EU/EEA, our legal basis for processing is:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Legitimate interest</strong> — for website analytics and security</li>
              <li><strong>Consent</strong> — when you voluntarily submit a contact form</li>
              <li><strong>Contract</strong> — when processing is necessary to deliver a service you requested</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">5. Data Storage &amp; Security</h2>
            <p>
              Contact form submissions are transmitted over TLS and stored securely. We retain enquiry data
              for up to 12 months, then delete it unless there is an ongoing business relationship. Our website
              is hosted on Vercel (for static content) and AWS (for backend services), both of which maintain
              industry-standard security certifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Access</strong> — request a copy of the data we hold about you</li>
              <li><strong>Correction</strong> — request correction of inaccurate data</li>
              <li><strong>Deletion</strong> — request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li><strong>Portability</strong> — receive your data in a structured format</li>
              <li><strong>Objection</strong> — object to processing based on legitimate interest</li>
            </ul>
            <p>To exercise any of these rights, email <a href="mailto:sales@atrivextech.com" className="text-primary-600 dark:text-primary-400 hover:underline">sales@atrivextech.com</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">7. Cookies</h2>
            <p>
              Our website uses only essential cookies required for the site to function (e.g., theme preference,
              language selection). We do not use advertising cookies, tracking pixels, or third-party analytics
              that create user profiles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Changes will be posted on this page with an updated
              &quot;Last updated&quot; date. Continued use of the website after changes constitutes acceptance of the
              revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">9. Contact</h2>
            <p>
              For privacy-related enquiries:<br />
              Atrivex Technology Private Limited<br />
              Site No. 7, Bhuvaneshwari Layout B, Nagnathpura<br />
              Bengaluru 560100, Karnataka, India<br />
              Email: <a href="mailto:sales@atrivextech.com" className="text-primary-600 dark:text-primary-400 hover:underline">sales@atrivextech.com</a>
            </p>
          </section>
        </div>

        <div className="pt-6 mt-10 border-t border-gray-200 dark:border-gray-800 flex gap-6 text-sm">
          <Link href="/impressum" className="text-primary-600 dark:text-primary-400 hover:underline">Impressum</Link>
          <Link href="/terms" className="text-primary-600 dark:text-primary-400 hover:underline">Terms of Service</Link>
        </div>
      </div>
    </div>
  )
}
