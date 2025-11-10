'use client'

import { ThemeProvider } from '@/contexts/ThemeContext'
import Header from './Header'
import Footer from './Footer'

export default function ClientLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}
