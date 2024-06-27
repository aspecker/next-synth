import type { Metadata } from 'next'
import { inter } from '@/app/ui/fonts'
import '@/app/ui/globals.css'

import { SideNav } from '@/components'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <SideNav />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
