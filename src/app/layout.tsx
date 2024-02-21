import type { Metadata } from 'next'
import { Manrope, Roboto_Flex as Roboto} from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

import {Providers} from "./providers";

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'Dr. Bruno Barreto',
  description: 'Ortopedista',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${roboto.variable} font-sans bg-gray-600 text-gray-100`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
    
  )
}
