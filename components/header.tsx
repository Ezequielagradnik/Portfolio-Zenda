"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface HeaderProps {
  currentLang: string
  setCurrentLang: (lang: string) => void
  languages: { code: string; name: string }[]
}

export function Header({ currentLang, setCurrentLang, languages }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    {
      href: "/",
      label: {
        en: "Home",
        es: "Inicio",
        pt: "Início",
      },
    },
    {
      href: "#services",
      label: {
        en: "Services",
        es: "Servicios",
        pt: "Serviços",
      },
    },
    {
      href: "#about",
      label: {
        en: "About Us",
        es: "Sobre Nosotros",
        pt: "Sobre Nós",
      },
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/zenda.png"
              alt="Zenda Logo"
              width={240}
              height={80}
              className="object-contain w-auto h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-orange-500 transition-colors relative group py-2"
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {item.label[currentLang as keyof typeof item.label]}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform group-hover:scale-x-100" />
              </a>
            ))}
            <select
              value={currentLang}
              onChange={(e) => setCurrentLang(e.target.value)}
              className="rounded-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-600 hover:text-orange-500 transition-colors py-2"
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault()
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                    }
                    setIsOpen(false)
                  }}
                >
                  {item.label[currentLang as keyof typeof item.label]}
                </a>
              ))}
              <select
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className="w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-orange-500 mt-4"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

