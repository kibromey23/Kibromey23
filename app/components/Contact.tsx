'use client'

import { motion } from 'framer-motion'
import { FiMail, FiMessageSquare, FiGithub } from 'react-icons/fi'

export default function Contact() {
  const contactMethods = [
    {
      icon: <FiMail className="text-3xl" />,
      title: 'Email',
      value: 'kibromey23@gmail.com',
      link: 'mailto:kibromey23@gmail.com',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <FiMessageSquare className="text-3xl" />,
      title: 'Telegram',
      value: '@kibromey23',
      link: 'https://t.me/kibromey23',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiGithub className="text-3xl" />,
      title: 'GitHub',
      value: 'kibromey23',
      link: 'https://github.com/kibromey23',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg">
            Have an exciting project or just want to chat? Get in touch!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-8 rounded-xl text-center group glow-effect"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${method.color} mb-4`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-gray-400 group-hover:text-cyan-400 transition-all">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <motion.a
            href="mailto:kibromey23@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-lg hover:shadow-2xl transition-all"
          >
            Send Me a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}