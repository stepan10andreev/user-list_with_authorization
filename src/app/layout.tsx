import { Providers } from '@/store/provider'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Registration Form | SignUp',
  description: 'Введите свои данные',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
