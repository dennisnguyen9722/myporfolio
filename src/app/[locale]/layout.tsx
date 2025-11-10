/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import ClientLayout from '@/components/ClientLayout'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const titles = {
    en: 'Nguyen Cao Duy - Full Stack Developer | ReactJS, Next.js Expert',
    vi: 'Nguyễn Cao Duy - Lập Trình Viên Full Stack | Chuyên Gia ReactJS, Next.js'
  }

  const descriptions = {
    en: '4+ years experienced Full Stack Developer specializing in ReactJS, Next.js, TypeScript, WordPress. Built 20+ e-commerce sites and enterprise applications. Available for hire.',
    vi: 'Lập trình viên Full Stack 4+ năm kinh nghiệm chuyên về ReactJS, Next.js, TypeScript, WordPress. Đã xây dựng 20+ website thương mại điện tử và ứng dụng doanh nghiệp. Sẵn sàng nhận việc.'
  }

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.en,
    icons: {
      icon: '/favicon.png'
    },
    keywords: [
      'Nguyen Cao Duy',
      'Full Stack Developer',
      'ReactJS Developer',
      'Next.js Developer',
      'Frontend Developer',
      'WordPress Developer',
      'UI/UX Designer',
      'Vietnam Developer',
      'Ho Chi Minh Developer',
      'Java Spring Boot',
      'TypeScript',
      'MySQL'
    ],
    authors: [{ name: 'Nguyen Cao Duy', email: 'dnc221297@gmail.com' }],
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      siteName: 'Nguyen Cao Duy Portfolio'
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as keyof typeof titles] || titles.en,
      description:
        descriptions[locale as keyof typeof descriptions] || descriptions.en
    }
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>{children}</ClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
