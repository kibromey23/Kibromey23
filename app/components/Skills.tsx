'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: '🧠 Deep Learning',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'CNN', 'RNN', 'LSTM', 'Transformers'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      category: '👁️ Computer Vision',
      skills: ['OpenCV', 'YOLO', 'R-CNN', 'Image Processing', 'Object Detection', 'Face Recognition'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: '🗣️ NLP & AI',
      skills: ['Transformers', 'BERT', 'GPT', 'Rasa', 'Hugging Face', 'LLMs', 'Chatbots'],
      color: 'from-pink-500 to-red-500',
    },
    {
      category: '🐍 Programming',
      skills: ['Python', 'JavaScript', 'SQL', 'Git', 'Docker', 'Linux'],
      color: 'from-green-500 to-teal-500',
    },
    {
      category: '📊 Data Science',
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Data Analysis'],
      color: 'from-orange-500 to-yellow-500',
    },
    {
      category: '☁️ Tools & Platforms',
      skills: ['AWS', 'Jupyter', 'Anaconda', 'MLflow', 'Apache', 'MySQL'],
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg">
            Proficient in cutting-edge AI/ML technologies and tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-xl glow-effect"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sidx) => (
                  <motion.span
                    key={sidx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: sidx * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white text-sm font-semibold cursor-pointer transition-all`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}