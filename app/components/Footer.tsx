'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-gradient-to-t from-purple-900/20 to-transparent py-8 border-t border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div>
            © 2026 Kibrom Getachew. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-all">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-all">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-all">Sitemap</a>
          </div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan-400"
          >
            Made with ❤️ & AI
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}