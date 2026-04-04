'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={item} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 glass-effect rounded-full text-sm"
            >
              🚀 Welcome to my portfolio
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Hi, I'm <span className="gradient-text">Kibrom</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl text-gray-300 leading-relaxed"
            >
              An AI/ML Engineer passionate about building intelligent systems. Specializing in 
              <span className="text-cyan-400 font-semibold"> Deep Learning</span>,{' '}
              <span className="text-purple-400 font-semibold">Computer Vision</span>, and{' '}
              <span className="text-pink-400 font-semibold">NLP</span>.
            </motion.p>

            <motion.p
              variants={item}
              className="text-gray-400 text-lg"
            >
              Turning ideas into intelligent solutions through cutting-edge AI technology.
            </motion.p>

            <motion.div
              variants={item}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
              >
                View My Work <FiArrowRight />
              </motion.a>
              <motion.a
                href="mailto:kibromey23@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass-effect rounded-lg font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                Get In Touch <FiMail />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={item}
            className="relative h-96 md:h-full hidden md:block"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="w-full h-full relative"
            >
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="50%" stopColor="#9d4edd" />
                    <stop offset="100%" stopColor="#ff006e" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#brainGradient)" strokeWidth="2" opacity="0.3" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="url(#brainGradient)" strokeWidth="1.5" opacity="0.2" />
                <g stroke="url(#brainGradient)" strokeWidth="2" opacity="0.4">
                  <line x1="200" y1="80" x2="140" y2="120" />
                  <line x1="200" y1="80" x2="260" y2="120" />
                  <line x1="140" y1="120" x2="120" y2="180" />
                  <line x1="260" y1="120" x2="280" y2="180" />
                  <line x1="120" y1="180" x2="150" y2="260" />
                  <line x1="280" y1="180" x2="250" y2="260" />
                </g>
                <circle cx="200" cy="200" r="8" fill="url(#brainGradient)" />
                <circle cx="140" cy="120" r="5" fill="#00d4ff" opacity="0.6" />
                <circle cx="260" cy="120" r="5" fill="#9d4edd" opacity="0.6" />
                <circle cx="120" cy="180" r="4" fill="#ff006e" opacity="0.5" />
                <circle cx="280" cy="180" r="4" fill="#ff006e" opacity="0.5" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-20"
        >
          <div className="text-cyan-400 text-3xl">↓</div>
        </motion.div>
      </div>
    </section>
  )
}