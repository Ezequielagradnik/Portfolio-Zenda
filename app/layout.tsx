import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Zenda - Web Development Agency",
  description: "Professional web development services",
  icons: {
    icon: [
      {
        url: "/zenda.png",
        href: "/zenda-removebg-preview.png",
      },
    ],
    shortcut: ["/zenda-removebg-preview.png"],
    apple: [
      {
        url: "/zenda-removebg-preview.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Zenda - Web Development Agency",
    description: "Professional web development services",
    images: [
      {
        url: "/zenda-removebg-preview.png",
        width: 800,
        height: 600,
        alt: "Zenda Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenda - Web Development Agency",
    description: "Professional web development services",
    images: ["/zenda-removebg-preview.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-[rgb(var(--background))]">{children}</body>
    </html>
  )
}
