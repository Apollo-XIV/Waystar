import './globals.css'
import { Inter } from 'next/font/google'
import Logo from '@/components/Logo'
import Noise from '@/components/Noise'
import AuthCtx from '@/components/auth/AuthCtx'

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
      <body className={inter.className + " overflow-scroll" }>
        <Logo />
        <AuthCtx>
        <main className='absolute inset-0 bg-primary'>
          {children}
        </main>
        </AuthCtx>
        <Noise />
      </body>
    </html>
  )
}
