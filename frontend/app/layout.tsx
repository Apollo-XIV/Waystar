import './globals.css'
import { Inter } from 'next/font/google'
import Logo from '@/components/Logo'
import Noise from '@/components/Noise'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Waystar',
  description: 'A Book Driven Media Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alice|Gloock|PT+Serif"></link>
      </head>
      <body className={inter.className }>
        <Logo />
        <main className='absolute inset-0 bg-[#dbcdb8] dark:bg-[#303666]'>
          {children}
        </main>
        <Noise />
      </body>
    </html>
  )
}
