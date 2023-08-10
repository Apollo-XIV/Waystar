import './globals.css'
import { Inter } from 'next/font/google'
import Logo from '@/components/Logo'
import Noise from '@/components/Noise'
import AuthCtx from '@/components/auth/AuthCtx'
import { Session, getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Waystar',
  description: 'A Book Driven Media Platform',
}

export default async function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode
}) {

  let session: Session | null | undefined = await getServerSession();
  if (!session) {session = undefined}

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alice|Gloock|PT+Serif|Lato"></link>
      </head>
      <body className={inter.className + " " + "overscroll-none overflow-y-scroll overflow-x-hidden" }>
        <AuthCtx session={session}>
        <main className='bg-primary'>
          {children}
        </main>
        </AuthCtx>
        {/* <Noise /> */}
      </body>
    </html>
  )
}

