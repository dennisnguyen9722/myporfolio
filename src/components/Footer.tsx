'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import Logo from '../../public/logo_ft.png'
import Image from 'next/image'

export default function Footer() {
  const t = useTranslations('footer')

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
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
    {
      icon: Mail,
      href: 'mailto:dnc221297@gmail.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { key: 'home', href: '#' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' }
  ]

  return (
    <footer className="relative bg-linear-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              <Image src={Logo} alt="logo" />
            </h3>
            <p className="text-gray-400 mb-6">{t('description')}</p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-linear-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t('contactTitle')}</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <span className="block text-sm text-gray-500">
                  {t('email')}
                </span>
                <a
                  href="mailto:dnc221297@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  dnc221297@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-sm text-gray-500">
                  {t('phone')}
                </span>
                <a
                  href="tel:+84383140123"
                  className="hover:text-blue-400 transition-colors"
                >
                  +84 383 140 123
                </a>
              </li>
              <li>
                <span className="block text-sm text-gray-500">
                  {t('location')}
                </span>
                <span>Ho Chi Minh City, Vietnam</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center gap-1"
          >
            {t('copyright', { year: new Date().getFullYear() })}
            <Heart className="w-4 h-4 text-red-500 inline" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            {t('builtWith')}
          </motion.p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  )
}
