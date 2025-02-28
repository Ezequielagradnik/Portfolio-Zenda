"use client"

import { useState, useEffect } from "react"
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

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

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
    <>
      <header className="fixed top-0 left-0 right-0 z-40 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/zenda.png"
                alt="Zenda Logo"
                width={300}
                height={100}
                className="object-contain w-auto h-20"
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
              className="md:hidden relative z-50 p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-100/50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Slide from right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
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
                </div>
                <nav className="flex-1 overflow-y-auto px-6 py-8">
                  <div className="space-y-6">
                    {menuItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block text-lg font-medium text-gray-900 hover:text-orange-500 transition-colors"
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
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-24" />
    </>
  )
}


