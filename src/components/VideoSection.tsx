'use client'

import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Video configuration for the company intro video.
 *
 * To use a YouTube video, set YOUTUBE_VIDEO_ID to the video ID
 * (e.g. 'dQw4w9WgXcQ' from https://youtube.com/watch?v=dQw4w9WgXcQ).
 *
 * To use a local video file, leave YOUTUBE_VIDEO_ID as null and
 * place the file at /public/videos/atrivex-intro.mp4.
 *
 * If neither is configured the section shows a "coming soon" placeholder.
 */
const YOUTUBE_VIDEO_ID: string | null = null
const LOCAL_VIDEO_SRC = '/videos/atrivex-intro.mp4'
const VIDEO_POSTER = '/images/hereBanner.png'

export default function VideoSection() {
  const { t } = useLanguage()

  const renderPlayer = () => {
    if (YOUTUBE_VIDEO_ID) {
      return (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
          title={t.video.heading}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    }

    return (
      <video
        className="absolute inset-0 w-full h-full object-cover"
        controls
        preload="metadata"
        poster={VIDEO_POSTER}
      >
        <source src={LOCAL_VIDEO_SRC} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{t.video.heading}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{t.video.subheading}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
          style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}
        >
          {renderPlayer()}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-400 text-sm mt-6 flex items-center justify-center gap-2"
        >
          <FiPlay size={14} />
          {t.video.caption}
        </motion.p>
      </div>
    </section>
  )
}
