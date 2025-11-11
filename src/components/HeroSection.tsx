'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  FileText
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: -mousePosition.x * 0.02,
            y: -mousePosition.y * 0.02
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white font-medium">{t('badge')}</span>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4"
          >
            <span className="text-xl md:text-2xl text-blue-300 font-light">
              {t('greeting')}
            </span>
          </motion.div>

          {/* Name with Glowing Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-6 relative"
          >
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(147,51,234,0.5)]">
              Nguyen Cao Duy
            </span>
          </motion.h1>

          {/* Animated Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Full Stack Developer
            </h2>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'WordPress'].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 rounded-full bg-linear-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 text-sm font-medium cursor-default"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full text-lg shadow-lg shadow-blue-500/50 relative overflow-hidden group"
            >
              <span className="relative z-10">{t('cta')}</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={
                locale === 'vi'
                  ? '/CV_Nguyen_Cao_Duy_VI.pdf'
                  : '/CV_Nguyen_Cao_Duy_EN.pdf'
              }
              download
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-full text-lg hover:bg-white/20 transition-all"
            >
              <FileText className="w-5 h-5" />
              {t('downloadCV')}
            </motion.a>
          </motion.div>

          {/* Social Links - Redesigned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              {
                icon: Github,
                href: 'https://github.com/dennisnguyen9722',
                label: 'GitHub'
              },
              {
                icon: Linkedin,
                href: 'https://www.linkedin.com/in/nguyen-duy-0b7884265/',
                label: 'LinkedIn'
              },
              { icon: Mail, href: 'mailto:dnc221297@gmail.com', label: 'Email' }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-blue-400/50 flex items-center justify-center transition-all group"
              >
                <social.icon className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-sm">{t('scroll')}</span>
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
