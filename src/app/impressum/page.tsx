import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Impressum — Atrivex Technology',
  description: 'Legal disclosure (Impressum) for Atrivex Technology Private Limited.',
}

export default function ImpressumPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Impressum</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm">
          Legal Disclosure
        </p>

        {/* Provider Information */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Provider Information</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 space-y-1 text-gray-700 dark:text-gray-300">
            <p className="font-semibold text-gray-900 dark:text-white">Atrivex Technology Private Limited</p>
            <p>Private Limited Company (India)</p>
            <p className="mt-3">Site No. 7, Bhuvaneshwari Layout B</p>
            <p>Nagnathpura, Electronics City</p>
            <p>Bengaluru 560100, Karnataka</p>
            <p>India</p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 space-y-2 text-gray-700 dark:text-gray-300">
            <p><span className="font-medium text-gray-900 dark:text-white">Phone:</span> +91 8884244422</p>
            <p><span className="font-medium text-gray-900 dark:text-white">Email:</span>{' '}
              <a href="mailto:info@atrivextech.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                info@atrivextech.com
              </a>
            </p>
            <p><span className="font-medium text-gray-900 dark:text-white">Website:</span>{' '}
              <a href="https://atrivextech.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                atrivextech.com
              </a>
            </p>
          </div>
        </section>

        {/* Registration */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Commercial Register &amp; Registration</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 space-y-2 text-gray-700 dark:text-gray-300">
            <p><span className="font-medium text-gray-900 dark:text-white">Registered at:</span> Registrar of Companies, Central Registration Centre, Karnataka</p>
            <p><span className="font-medium text-gray-900 dark:text-white">CIN:</span> U62091KA2026PTC217478</p>
            <p><span className="font-medium text-gray-900 dark:text-white">PAN:</span> ABFCA1297C</p>
            <p><span className="font-medium text-gray-900 dark:text-white">GSTIN:</span> 29ABFCA1297C1ZQ</p>
            <p><span className="font-medium text-gray-900 dark:text-white">Date of Incorporation:</span> 11 March 2026</p>
          </div>
        </section>

        {/* Represented by */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Represented By</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300">
            <p className="font-semibold text-gray-900 dark:text-white">Ashik H S</p>
            <p>Director, Atrivex Technology Private Limited</p>
            <p className="mt-2">
              Email:{' '}
              <a href="mailto:info@atrivextech.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                info@atrivextech.com
              </a>
            </p>
          </div>
        </section>

        {/* Responsible for content */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Responsible for Content</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300">
            <p className="font-semibold text-gray-900 dark:text-white">Atrivex Technology Private Limited</p>
            <p>Site No. 7, Bhuvaneshwari Layout B</p>
            <p>Nagnathpura, Electronics City</p>
            <p>Bengaluru 560100, Karnataka, India</p>
            <p className="mt-2">
              Email:{' '}
              <a href="mailto:info@atrivextech.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                info@atrivextech.com
              </a>
            </p>
          </div>
        </section>

        {/* EU Dispute Resolution */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">EU Online Dispute Resolution</h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 space-y-3">
            <p>
              The European Commission provides a platform for online dispute resolution (ODR):{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline break-all"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              We are not obligated or willing to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </div>
        </section>

        {/* Liability Disclaimer */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Liability for Content</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            As a service provider, we are responsible for our own content on these pages in accordance with
            applicable laws. However, we are not obligated to monitor transmitted or stored third-party
            information or to investigate circumstances that indicate illegal activity. Obligations to remove
            or block the use of information under applicable laws remain unaffected. Liability in this regard
            is only possible from the point of knowledge of a specific infringement. Upon becoming aware of
            corresponding infringements, we will remove this content immediately.
          </p>
        </section>

        {/* Liability for Links */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Liability for Links</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            Our website contains links to external websites of third parties, on whose content we have no
            influence. Therefore, we cannot assume any liability for this external content. The respective
            provider or operator of the pages is always responsible for the content of the linked pages.
            The linked pages were checked for possible legal violations at the time of linking. Illegal content
            was not recognizable at the time of linking. Permanent monitoring of the content of the linked pages
            is not reasonable without concrete evidence of a violation. Upon becoming aware of legal violations,
            we will remove such links immediately.
          </p>
        </section>

        {/* Copyright */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Copyright</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            The content and works on these pages created by the site operator are subject to Indian and
            international copyright law. Duplication, processing, distribution, or any form of commercialization
            of such material beyond the scope of copyright law requires the prior written consent of its
            respective author or creator. Downloads and copies of this site are only permitted for private,
            non-commercial use.
          </p>
        </section>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex gap-6 text-sm">
          <Link href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-primary-600 dark:text-primary-400 hover:underline">Terms of Service</Link>
          <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">Contact</Link>
        </div>
      </div>
    </div>
  )
}
