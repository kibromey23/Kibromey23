'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiMail } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 glass-effect border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            {'<Kibrom />'}
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={`#${item.toLowerCase()}`}
                whileHover={{ color: '#00d4ff' }}
                className="text-sm font-medium hover:text-cyan-400 transition-all"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <motion.a
              href="https://github.com/kibromey23"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-xl hover:text-cyan-400 transition-all"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href="mailto:kibromey23@gmail.com"
              whileHover={{ scale: 1.2 }}
              className="text-xl hover:text-cyan-400 transition-all"
            >
              <FiMail />
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-3"
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="block text-sm font-medium hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}