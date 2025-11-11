'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function SkillsSection() {
  const t = useTranslations('skills')

  const skillCategories = [
    {
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'ReactJS', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS/SCSS', level: 95 },
        { name: 'Bootstrap', level: 90 },
        { name: 'jQuery', level: 85 }
      ]
    },
    {
      category: 'Backend',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Java Spring Boot', level: 70 },
        { name: 'MySQL', level: 80 },
        { name: 'REST API', level: 85 },
        { name: 'Express Js', level: 80 },
        { name: 'Mongo DB', level: 80 }
      ]
    },
    {
      category: 'CMS & Tools',
      color: 'from-orange-500 to-yellow-500',
      skills: [
        { name: 'WordPress', level: 95 },
        { name: 'Git/GitHub', level: 85 },
        { name: 'SEO Technical', level: 80 },
        { name: 'Server Management', level: 75 }
      ]
    },
    {
      category: 'Design',
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Photoshop', level: 85 },
        { name: 'Illustrator', level: 80 },
        { name: 'After Effects', level: 75 },
        { name: 'Premiere Pro', level: 80 },
        { name: 'UI/UX Design', level: 85 }
      ]
    }
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-size-[64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4"
          >
            {t('badge')}
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-3 h-3 rounded-full bg-linear-to-r ${category.color}`}
                />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2
                        }}
                        className={`h-full bg-linear-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
