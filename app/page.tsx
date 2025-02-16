"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectPreview from "@/components/ProjectPreview" // Import the ProjectPreview component

const projects = [
  {
    url: "https://shop.kurtisconner.com",
    image: "/KURTIS.png", // Reemplazar con capturas reales
    title: "Kurtis Conner Shop",
  },
  {
    url: "https://linkup-eta.vercel.app",
    image: "/linkup.png", // Reemplazar con capturas reales
    title: "LinkUp",
  },
  {
    url: "https://www.energyhumanities.ca",
    image: "/energy.png", // Reemplazar con capturas reales
    title: "Energy Humanities",
  },
  {
    url: "https://superiorrental.ae",
    image: "/super.png", // Reemplazar con capturas reales
    title: "Superior Rental",
  },
  {
    url: "https://gmz.ae/es",
    image: "/gmz.png", // Reemplazar con capturas reales
    title: "GMZ",
  },
]

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
]

const handleWhatsAppClick = (packageName: string) => {
  const message = encodeURIComponent(
    `Hola! Estoy interesado/a en obtener más información sobre el paquete ${packageName} para mi sitio web.`,
  )
  window.open(`https://wa.me/5491131954757?text=${message}`, "_blank")
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentLang, setCurrentLang] = useState("en")
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [autoplay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
    setAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
    setAutoplay(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-16%20a%20las%2016.36.40_a8999fb9.jpg-tCwqgEY79UGI5Qz5AxFrHqDj26ZjgN.jpeg"
            alt="Zenda Logo"
            width={120}
            height={40}
            className="object-contain h-8"
          />
          <nav className="flex items-center gap-6">
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-gray-900">Zenda</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {currentLang === "en"
                ? "Web Development Agency"
                : currentLang === "es"
                  ? "Agencia de Desarrollo Web"
                  : "Agência de Desenvolvimento Web"}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentLang === "en" ? "Our Projects" : currentLang === "es" ? "Nuestros Proyectos" : "Nossos Projetos"}
          </h2>
          <div className="relative">
            <ProjectPreview {...projects[currentSlide]} />
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentLang === "en" ? "Our Team" : currentLang === "es" ? "Nuestro Equipo" : "Nossa Equipe"}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-16%20a%20las%2016.03.10_f2ee78cf.jpg-tb4HhpDEROWyEe4fUVqcvZPqtWl3pV.jpeg"
                alt="Nicolas Said"
                width={200}
                height={200}
                className="mx-auto rounded-full mb-4 object-cover aspect-square"
              />
              <h3 className="text-xl font-semibold">Nicolas Said</h3>
              <p className="text-gray-600">CEO & Co-founder</p>
            </div>
            <div className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-16%20a%20las%2016.03.31_a341f495.jpg-fWpSgI4qmHkZeuLKFOjGcmJcZxQ0co.jpeg"
                alt="Ezequiel Agradnik"
                width={200}
                height={200}
                className="mx-auto rounded-full mb-4 object-cover aspect-square"
              />
              <h3 className="text-xl font-semibold">Ezequiel Agradnik</h3>
              <p className="text-gray-600">CTO & Co-founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentLang === "en" ? "Our Packages" : currentLang === "es" ? "Nuestros Paquetes" : "Nossos Pacotes"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Landing Page</h3>
              <p className="text-3xl font-bold mb-6">$450</p>
              <p className="text-gray-600 mb-6">
                {currentLang === "en"
                  ? "Ideal for promoting a specific product or service"
                  : currentLang === "es"
                    ? "Ideal para promocionar un producto o servicio específico"
                    : "Ideal para promover um produto ou serviço específico"}
              </p>
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => handleWhatsAppClick("Landing Page")}
              >
                {currentLang === "en" ? "Get Started" : currentLang === "es" ? "Comenzar" : "Começar"}
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                {currentLang === "en"
                  ? "Corporate Website"
                  : currentLang === "es"
                    ? "Sitio Corporativo"
                    : "Site Corporativo"}
              </h3>
              <p className="text-3xl font-bold mb-6">$849</p>
              <p className="text-gray-600 mb-6">
                {currentLang === "en"
                  ? "Present your company professionally"
                  : currentLang === "es"
                    ? "Presenta tu empresa de manera profesional"
                    : "Apresente sua empresa profissionalmente"}
              </p>
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => handleWhatsAppClick("Corporate Website")}
              >
                {currentLang === "en" ? "Get Started" : currentLang === "es" ? "Comenzar" : "Começar"}
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
              <p className="text-3xl font-bold mb-6">$1300</p>
              <p className="text-gray-600 mb-6">
                {currentLang === "en"
                  ? "Sell your products online securely"
                  : currentLang === "es"
                    ? "Vende tus productos en línea de manera segura"
                    : "Venda seus produtos online com segurança"}
              </p>
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => handleWhatsAppClick("E-commerce")}
              >
                {currentLang === "en" ? "Get Started" : currentLang === "es" ? "Comenzar" : "Começar"}
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">
                {currentLang === "en"
                  ? "Advanced Features"
                  : currentLang === "es"
                    ? "Funcionalidades Avanzadas"
                    : "Recursos Avançados"}
              </h3>
              <p className="text-3xl font-bold mb-6">$1500</p>
              <p className="text-gray-600 mb-6">
                {currentLang === "en"
                  ? "Includes bookings, memberships and more"
                  : currentLang === "es"
                    ? "Incluye reservas, membresías y más"
                    : "Inclui reservas, associações e mais"}
              </p>
              <Button
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => handleWhatsAppClick("Advanced Features")}
              >
                {currentLang === "en" ? "Get Started" : currentLang === "es" ? "Comenzar" : "Começar"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentLang === "en" ? "Contact Us" : currentLang === "es" ? "Contáctanos" : "Contate-nos"}
          </h2>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <a
              href="mailto:eagradnik@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-500"
            >
              <Mail className="h-5 w-5" />
              eagradnik@gmail.com
            </a>
            <a href="tel:+5491131954757" className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
              <Phone className="h-5 w-5" />
              +54 911 3195-4757
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-600">
              © 2025 Zenda.{" "}
              {currentLang === "en"
                ? "All rights reserved."
                : currentLang === "es"
                  ? "Todos los derechos reservados."
                  : "Todos os direitos reservados."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

