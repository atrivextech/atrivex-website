import { motion } from 'framer-motion'

export default function Testimonials() {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Join innovative companies that trust us to deliver cutting-edge technology solutions. Let's build
            something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-10 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </a>
            <a
              href="#services"
              className="px-10 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition font-semibold text-lg"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
