import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "David Boham | Computer Science Student",
  description: "Personal portfolio website of David Boham, Computer Science Student at Duke University",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased`}>{children}</body>
    </html>
  )
}
