import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}images/atrivex-logo.svg`

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoSrc} alt="Atrivex Technology" className="w-8 h-8" />
              <h3 className="text-xl font-bold text-gradient">Atrivex</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Leading technology company specializing in software development and digital transformation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <FiMail /> sales@atrivextech.com
              </li>
              <li className="flex items-center gap-2">
                <FiPhone /> +91 8884244422
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span>#07, Bhuvaneshwari Layout B Cross, Nagnathpura Hosa Road, Bengaluru-560100</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600" aria-label="Twitter">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atrivex Technology Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
