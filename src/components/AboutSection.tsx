'use client'

import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import {
  Code2,
  Rocket,
  Zap,
  Heart,
  Award,
  Users,
  Coffee,
  Star
} from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { useLocale } from 'next-intl'

function CountUpAnimation({
  end,
  duration = 2
}: {
  end: number
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return <span ref={countRef}>{count}</span>
}

export default function AboutSection() {
  const t = useTranslations('about')
  const locale = useLocale()

  const stats = [
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: locale === 'vi' ? 'Dự Án Hoàn Thành' : 'Projects Completed'
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: locale === 'vi' ? 'Khách Hàng Hài Lòng' : 'Happy Clients'
    },
    {
      icon: Coffee,
      value: 4,
      suffix: '+',
      label: locale === 'vi' ? 'Năm Kinh Nghiệm' : 'Years Experience'
    },
    {
      icon: Star,
      value: 100,
      suffix: '%',
      label: locale === 'vi' ? 'Dự Án Thành Công' : 'Success Rate'
    }
  ]

  const features = [
    {
      icon: Code2,
      titleKey: 'feature1Title',
      descKey: 'feature1Desc',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      icon: Rocket,
      titleKey: 'feature2Title',
      descKey: 'feature2Desc',
      gradient: 'from-purple-500 via-pink-500 to-rose-500'
    },
    {
      icon: Zap,
      titleKey: 'feature3Title',
      descKey: 'feature3Desc',
      gradient: 'from-orange-500 via-yellow-500 to-amber-500'
    },
    {
      icon: Heart,
      titleKey: 'feature4Title',
      descKey: 'feature4Desc',
      gradient: 'from-red-500 via-pink-500 to-purple-500'
    }
  ]

  return (
    <section
      id="about"
      className="py-20 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)] bg-size-[64px_64px]" />

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
            className="inline-block px-4 py-2 rounded-full bg-linear-to-b from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4"
          >
            {t('badge')}
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-linear-to-b from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-b from-blue-500 to-purple-500 flex items-center justify-center mb-4 mx-auto">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gray-800 dark:text-gray-200 mb-1">
                  <CountUpAnimation end={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div
                className={`absolute inset-0 bg-linear-to-b ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-b ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                {t(feature.titleKey)}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
