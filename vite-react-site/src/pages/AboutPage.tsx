export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About Atrivex</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            To empower businesses with innovative technology solutions that drive growth, efficiency, and digital
            transformation in an ever-evolving technological landscape.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            To be the leading technology partner for businesses worldwide, recognized for excellence in software
            development, AI innovation, and customer success.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Recently Published Apps</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
            AtriEstates and AtriWork, our real estate and workforce Android apps, are now published on Google Play.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.atrivex.atriestates"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700 transition font-medium"
            >
              AtriEstates on Google Play
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.atrivex.atriwork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700 transition font-medium"
            >
              AtriWork on Google Play
            </a>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Core Values</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
            <li>
              <strong>Innovation:</strong> Continuously pushing boundaries with cutting-edge solutions
            </li>
            <li>
              <strong>Excellence:</strong> Delivering quality in every project we undertake
            </li>
            <li>
              <strong>Integrity:</strong> Building trust through transparency and honesty
            </li>
            <li>
              <strong>Collaboration:</strong> Working closely with clients as true partners
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
