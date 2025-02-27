"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Header } from "@/components/header"

const projects = [
  {
    url: "https://shop.kurtisconner.com",
    title: "Kurtis Conner Shop",
    image: "/KURTIS.png",
  },
  {
    url: "https://www.linkupstartups.com",
    title: "LinkUp",
    image: "/linkup.png",
  },
  {
    url: "https://www.energyhumanities.ca",
    title: "Energy Humanities",
    image: "/energy.png",
  },
  {
    url: "https://superiorrental.ae",
    title: "Superior Rental",
    image: "/super.png",
  },
  {
    url: "https://gmz.ae/es",
    title: "GMZ",
    image: "/gmz.png",
  },
  {
    url: "https://olbmotors.vercel.app/",
    title: "OLB Motors",
    image: "/olb.png",
  },
]

const pricingPlans = [
  {
    name: {
      en: "Landing Page",
      es: "Página de Aterrizaje",
      pt: "Página de Destino",
    },
    price: "$450",
    features: {
      en: ["Custom design", "Mobile responsive", "Contact form", "SEO optimization"],
      es: ["Diseño personalizado", "Diseño responsive", "Formulario de contacto", "Optimización SEO"],
      pt: ["Design personalizado", "Design responsivo", "Formulário de contato", "Otimização SEO"],
    },
  },
  {
    name: {
      en: "Corporate Website",
      es: "Sitio Web Corporativo",
      pt: "Site Corporativo",
    },
    price: "$849",
    features: {
      en: ["Up to 5 pages", "Content Management System", "Basic SEO package"],
      es: ["Hasta 5 páginas", "Sistema de gestión de contenido", "Paquete SEO básico"],
      pt: ["Até 5 páginas", "Sistema de gerenciamento de conteúdo", "Pacote SEO básico"],
    },
  },
  {
    name: {
      en: "E-commerce",
      es: "Comercio Electrónico",
      pt: "E-commerce",
    },
    price: "$1300",
    features: {
      en: ["Product catalog", "Shopping cart", "Secure payment gateway", "Order management"],
      es: ["Catálogo de productos", "Carrito de compras", "Pasarela de pago segura", "Gestión de pedidos"],
      pt: ["Catálogo de produtos", "Carrinho de compras", "Gateway de pagamento seguro", "Gestão de pedidos"],
    },
  },
  {
    name: {
      en: "Advanced Features",
      es: "Características Avanzadas",
      pt: "Recursos Avançados",
    },
    price: "$1500",
    features: {
      en: ["Custom functionality", "API integrations", "Advanced analytics", "Priority support"],
      es: ["Funcionalidad personalizada", "Integraciones API", "Análisis avanzado", "Soporte prioritario"],
      pt: ["Funcionalidade personalizada", "Integrações API", "Análise avançada", "Suporte prioritário"],
    },
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
  const [currentLang, setCurrentLang] = useState("en")

  return (
    <div className="min-h-screen bg-orange-50">
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} languages={languages} />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold tracking-tight sm:text-6xl text-gray-900 mb-6"
            >
              <span className="text-orange-500">Zenda</span> Web Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl leading-8 text-gray-600 mb-8"
            >
              {currentLang === "en"
                ? "Transforming Ideas into Powerful Digital Experiences"
                : currentLang === "es"
                  ? "Transformando Ideas en Poderosas Experiencias Digitales"
                  : "Transformando Ideias em Poderosas Experiências Digitais"}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {currentLang === "en" ? "Our Projects" : currentLang === "es" ? "Nuestros Proyectos" : "Nossos Projetos"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-500 hover:text-orange-600"
                  >
                    {currentLang === "en" ? "Visit Site" : currentLang === "es" ? "Visitar Sitio" : "Visitar Site"}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {currentLang === "en" ? "Our Team" : currentLang === "es" ? "Nuestro Equipo" : "Nossa Equipe"}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-16%20a%20las%2016.03.10_f2ee78cf.jpg-tb4HhpDEROWyEe4fUVqcvZPqtWl3pV.jpeg"
                alt="Nicolas Said"
                width={200}
                height={200}
                className="mx-auto rounded-full mb-4 object-cover aspect-square"
              />
              <h3 className="text-xl font-semibold text-gray-900">Nicolas Said</h3>
              <p className="text-gray-600">CEO & Co-founder</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-16%20a%20las%2016.03.31_a341f495.jpg-fWpSgI4qmHkZeuLKFOjGcmJcZxQ0co.jpeg"
                alt="Ezequiel Agradnik"
                width={200}
                height={200}
                className="mx-auto rounded-full mb-4 object-cover aspect-square"
              />
              <h3 className="text-xl font-semibold text-gray-900">Ezequiel Agradnik</h3>
              <p className="text-gray-600">CTO & Co-founder</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            {currentLang === "en" ? "Our Packages" : currentLang === "es" ? "Nuestros Paquetes" : "Nossos Pacotes"}
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {currentLang === "en"
              ? "Choose the perfect plan for your business needs"
              : currentLang === "es"
                ? "Elige el plan perfecto para las necesidades de tu negocio"
                : "Escolha o plano perfeito para as necessidades do seu negócio"}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name[currentLang as keyof typeof plan.name]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg border border-orange-100 hover:border-orange-300 transition-all duration-300 flex flex-col h-full"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {plan.name[currentLang as keyof typeof plan.name]}
                  </h3>
                  <p className="text-4xl font-bold text-orange-500">{plan.price}</p>
                </div>
                <ul className="mb-8 space-y-4 flex-1">
                  {plan.features[currentLang as keyof typeof plan.features].map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all duration-300 mt-auto"
                  onClick={() => handleWhatsAppClick(plan.name[currentLang as keyof typeof plan.name])}
                >
                  {currentLang === "en" ? "Get Started" : currentLang === "es" ? "Comenzar" : "Começar"}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {currentLang === "en" ? "Contact Us" : currentLang === "es" ? "Contáctanos" : "Contate-nos"}
          </h2>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <a
              href="mailto:eagradnik@gmail.com"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
              eagradnik@gmail.com
            </a>
            <a
              href="tel:+5491131954757"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors duration-300"
            >
              <Phone className="h-5 w-5" />
              +54 911 3195-4757
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-orange-50 border-t border-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

