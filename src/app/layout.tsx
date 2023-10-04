import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from "@/app/store/Provider";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'vox-harbor',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative h-screen">
          <Providers>
              <Navbar />
              {children}
          </Providers>
          {/*<Footer />*/}
      </body>
    </html>
  )
}
