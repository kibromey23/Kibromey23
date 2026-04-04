'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'ChatBot Pro',
      description: 'Advanced NLP-powered chatbot with context awareness and multi-intent recognition',
      tech: ['Rasa', 'PyTorch', 'NLP', 'Python'],
      status: 'In Development',
      github: 'https://github.com/kibromey23',
      demo: '#',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'CreativeAI',
      description: 'Generative AI system for text and image generation using state-of-the-art models',
      tech: ['PyTorch', 'GANs', 'Transformers', 'TensorFlow'],
      status: 'In Development',
      github: 'https://github.com/kibromey23',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Smart Robot Assistant',
      description: 'Intelligent home automation system with computer vision and autonomous navigation',
      tech: ['ROS', 'Computer Vision', 'Python', 'IoT'],
      status: 'In Development',
      github: 'https://github.com/kibromey23',
      demo: '#',
      gradient: 'from-pink-500 to-red-500',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Building tomorrow's AI solutions today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-effect rounded-xl overflow-hidden glow-effect transition-all duration-300"
            >
              <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 opacity-20"
                >
                  <div className="w-full h-full bg-gradient-to-r from-transparent to-white" />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="px-2 py-1 text-xs bg-white/10 text-cyan-400 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-4 inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full font-semibold">
                  {project.status}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-cyan-400 hover:text-pink-400 transition-all"
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-cyan-400 hover:text-pink-400 transition-all"
                  >
                    <FiExternalLink /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}