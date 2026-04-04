'use client'

import { motion } from 'framer-motion'
import { FiBrain, FiCode, FiTarget } from 'react-icons/fi'

export default function About() {
  const features = [
    {
      icon: <FiBrain className="text-3xl" />,
      title: 'AI/ML Expert',
      desc: 'Specialized in TensorFlow, PyTorch, and Deep Learning architectures',
    },
    {
      icon: <FiCode className="text-3xl" />,
      title: 'Full Stack Developer',
      desc: 'Building intelligent applications from backend to frontend',
    },
    {
      icon: <FiTarget className="text-3xl" />,
      title: 'Problem Solver',
      desc: 'Turning complex challenges into elegant, scalable solutions',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm an IT student at Mekelle Institute of Technology with a passion for creating intelligent systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              With a deep passion for Artificial Intelligence and Machine Learning, I'm dedicated to building systems that not only work but truly think.
            </p>
            <ul className="space-y-3 text-gray-300">
              {[
                '🧠 Deep Learning & Neural Networks',
                '👁️ Computer Vision & Image Recognition',
                '🗣️ Natural Language Processing',
                '⚙️ ML Operations & Model Deployment',
                '🤖 Robotics & Automation',
                '📊 Data Science & Analytics',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-cyan-400 text-xl">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '10+', label: 'Projects' },
              { number: '100+', label: 'GitHub Stars' },
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Followers' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-xl text-center glow-effect"
              >
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-effect p-8 rounded-xl glow-effect group"
            >
              <div className="text-cyan-400 mb-4 group-hover:text-pink-400 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}