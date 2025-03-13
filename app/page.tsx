"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, ExternalLink, Code, Palette, Search, Target } from "lucide-react"
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
  {
    url:"https://www.car-mart.com/",
    title:"Car Mart",
    image:"/car.png",
  },
  {
    url:"https://www.bymanu.com.br/",
    title:"By Manu",
    image:"/bymanu.png",
  },
  {
    url:"https://oscarluxury.com/",
    title:"Oscar Luxury",
    image:"/oscar.png",
  },

]

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
]

export default function Home() {
  const [currentLang, setCurrentLang] = useState("en")

  return (
    <div className="min-h-screen bg-orange-50">
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} languages={languages} />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.h1
                className="text-5xl font-bold tracking-tight sm:text-6xl text-gray-900 mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <motion.span
                  className="text-orange-500 inline-block"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Zenda
                </motion.span>{" "}
                Web Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-xl leading-8 text-gray-600 mb-8"
              >
                {currentLang === "en"
                  ? "Transforming ideas into powerful digital experiences"
                  : currentLang === "es"
                    ? "Transformando ideas en poderosas experiencias digitales"
                    : "Transformando ideias em poderosas experiências digitais"}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              {currentLang === "en"
                ? "We're not your average agency"
                : currentLang === "es"
                  ? "No somos una agencia común"
                  : "Não somos uma agência comum"}
            </h2>
            <p className="text-lg text-gray-600">
              {currentLang === "en"
                ? "We offer comprehensive web solutions with premium features included in every project"
                : currentLang === "es"
                  ? "Ofrecemos soluciones web integrales con características premium incluidas en cada proyecto"
                  : "Oferecemos soluções web abrangentes com recursos premium incluídos em cada projeto"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
            {/* Core Services */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                {currentLang === "en"
                  ? "Included in every project"
                  : currentLang === "es"
                    ? "Incluido en cada proyecto"
                    : "Incluído em cada projeto"}
              </h3>
              <ul className="space-y-6">
                {[
                  {
                    en: "Custom UX/UI Design & Optimization",
                    es: "Diseño UX/UI Personalizado y Optimización",
                    pt: "Design UX/UI Personalizado e Otimização",
                  },
                  {
                    en: "On-page SEO implementation",
                    es: "Implementación de SEO en página",
                    pt: "Implementação de SEO na página",
                  },
                  {
                    en: "Content Management (Text & Images)",
                    es: "Gestión de Contenido (Texto e Imágenes)",
                    pt: "Gestão de Conteúdo (Texto e Imagens)",
                  },
                  {
                    en: "FREE Professional Logo Design",
                    es: "Diseño de Logo Profesional GRATIS",
                    pt: "Design de Logo Profissional GRÁTIS",
                  },
                  {
                    en: "Responsive Website Development",
                    es: "Desarrollo Web Responsivo",
                    pt: "Desenvolvimento Web Responsivo",
                  },
                  {
                    en: "Third-party Integrations (APIs, CRM, payment gateways, chatbots)",
                    es: "Integraciones con terceros (APIs, CRM, pasarelas de pago, chatbots)",
                    pt: "Integrações com terceiros (APIs, CRM, gateways de pagamento, chatbots)",
                  },
                  {
                    en: "Advanced Web Security (SSL, malware protection, automatic backups)",
                    es: "Seguridad web avanzada (SSL, protección contra malware, backups automáticos)",
                    pt: "Segurança web avançada (SSL, proteção contra malware, backups automáticos)",
                  },
                  {
                    en: "Hosting and Domain (management and configuration)",
                    es: "Hosting y dominio (gestión y configuración)",
                    pt: "Hosting e domínio (gestão e configuração)",
                  },
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-orange-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {service[currentLang as keyof typeof service]}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Additional Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                {currentLang === "en"
                  ? "Optional monthly services"
                  : currentLang === "es"
                    ? "Servicios mensuales opcionales"
                    : "Serviços mensais opcionais"}
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    en: "Monthly analytics reports",
                    es: "Informes mensuales de analytics",
                    pt: "Relatórios mensais de analytics",
                    description: {
                      en: "Detailed insights about your website's performance and visitor behavior",
                      es: "Información detallada sobre el rendimiento de su sitio web y el comportamiento de los visitantes",
                      pt: "Informações detalhadas sobre o desempenho do seu site e o comportamento dos visitantes",
                    },
                  },
                  {
                    en: "Digital advertising campaigns",
                    es: "Campañas de publicidad digital",
                    pt: "Campanhas de publicidade digital",
                    description: {
                      en: "Strategic ad campaigns on Google, Meta, and other platforms to reach your target audience",
                      es: "Campañas publicitarias estratégicas en Google, Meta y otras plataformas para alcanzar a tu público objetivo",
                      pt: "Campanhas publicitárias estratégicas no Google, Meta e outras plataformas para alcançar seu público-alvo",
                    },
                  },
                  {
                    en: "Website maintenance",
                    es: "Mantenimiento del sitio Web",
                    pt: "Manutenção do site",
                    description: {
                      en: "Regular updates, security checks, and content modifications",
                      es: "Actualizaciones regulares, controles de seguridad y modificaciones de contenido",
                      pt: "Atualizações regulares, verificações de segurança e modificações de conteúdo",
                    },
                  },
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white-50 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <svg
                        className="w-5 h-5 text-orange-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      <span className="font-semibold">{String(service[currentLang as keyof typeof service])}</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-8">
                      {service.description[currentLang as keyof typeof service.description]}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4">
              <p className="text-lg text-gray-600">
                {currentLang === "en"
                  ? "Interested in our services?"
                  : currentLang === "es"
                    ? "¿Te interesan nuestros servicios?"
                    : "Interessado em nossos serviços?"}
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">
                  {currentLang === "en" ? "Contact Us" : currentLang === "es" ? "Contáctanos" : "Contate-nos"}
                </span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
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
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-orange-500 hover:text-orange-600"
                  >
                    {currentLang === "en" ? "Visit Site" : currentLang === "es" ? "Visitar Sitio" : "Visitar Site"}
                    <ExternalLink className="w-5 h-5 ml-2" />
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

          {/* Team Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 mb-6">
              {currentLang === "en"
                ? "We are a team of young tech enthusiasts who have been entrepreneuring for quite some time. Despite our young age, our passion for technology and innovation drives us to create exceptional digital experiences."
                : currentLang === "es"
                  ? "Somos un equipo de jóvenes entusiastas de la tecnología que llevamos emprendiendo desde hace bastante tiempo. A pesar de nuestra corta edad, nuestra pasión por la tecnología y la innovación nos impulsa a crear experiencias digitales excepcionales."
                  : "Somos uma equipe de jovens entusiastas da tecnologia que empreendemos há bastante tempo. Apesar da nossa pouca idade, nossa paixão por tecnologia e inovação nos impulsiona a criar experiências digitais excepcionais."}
            </p>
          </div>

          {/* Founders */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202025-02-16%20a%20las%2016.03.10_f2ee78cf.jpg-tb4HhpDEROWyEe4fUVqcvZPqtWl3pV.jpeg"
                alt="Nicolas Said"
                width={200}
                height={200}
                className="mx-auto rounded-full mb-4 object-cover aspect-square"
              />
              <h3 className="text-xl font-semibold text-gray-900">Nicolas Said</h3>
              <p className="text-gray-600 mb-2">CEO & Co-founder</p>
              <p className="text-sm text-gray-500">
                {currentLang === "en"
                  ? "CEO & Co-founder"
                  : currentLang === "es"
                    ? "CEO & Co-founder"
                    : "CEO & Co-founder"}
              </p>
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
              <p className="text-gray-600 mb-2">CTO & Co-founder</p>
              <p className="text-sm text-gray-500">
              </p>
            </motion.div>
          </div>

          {/* Extended Team */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
              {currentLang === "en" ? "Extended Team" : currentLang === "es" ? "Equipo Extendido" : "Equipe Estendida"}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {" "}
              {}
              <div className="text-center h-full">
                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col group hover:shadow-2xl hover:bg-orange-50/50 transition-all duration-300 hover:-translate-y-2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 mx-auto mb-4 text-orange-500 flex-shrink-0"
                  >
                    <Code className="w-full h-full" />
                  </motion.div>
                  <h4 className="font-semibold mb-2 flex-shrink-0">
                    {currentLang === "en"
                      ? "Software Engineers"
                      : currentLang === "es"
                        ? "Ingenieros de Software"
                        : "Engenheiros de Software"}
                  </h4>
                  <p className="text-sm text-gray-500 flex-grow">
                    {currentLang === "en"
                      ? "Two experienced software engineers bringing enterprise-level expertise to our projects."
                      : currentLang === "es"
                        ? "Dos ingenieros de software experimentados aportando experiencia de nivel empresarial a nuestros proyectos."
                        : "Dois engenheiros de software experientes trazendo expertise de nível empresarial para nossos projetos."}
                  </p>
                </div>
              </div>
              <div className="text-center h-full">
                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col group hover:shadow-2xl hover:bg-orange-50/50 transition-all duration-300 hover:-translate-y-2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 mx-auto mb-4 text-orange-500 flex-shrink-0"
                  >
                    <Palette className="w-full h-full" />
                  </motion.div>
                  <h4 className="font-semibold mb-2 flex-shrink-0">
                    {currentLang === "en"
                      ? "Design Team"
                      : currentLang === "es"
                        ? "Equipo de Diseño"
                        : "Equipe de Design"}
                  </h4>
                  <p className="text-sm text-gray-500 flex-grow">
                    {currentLang === "en"
                      ? "Creative professionals dedicated to crafting beautiful user interfaces."
                      : currentLang === "es"
                        ? "Profesionales creativos dedicados a crear interfaces de usuario hermosas."
                        : "Profissionais criativos dedicados a criar interfaces de usuário bonitas."}
                  </p>
                </div>
              </div>
              <div className="text-center h-full">
                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col group hover:shadow-2xl hover:bg-orange-50/50 transition-all duration-300 hover:-translate-y-2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 mx-auto mb-4 text-orange-500 flex-shrink-0"
                  >
                    <Search className="w-full h-full" />
                  </motion.div>
                  <h4 className="font-semibold mb-2 flex-shrink-0">SEO Specialist</h4>
                  <p className="text-sm text-gray-500 flex-grow">
                    {currentLang === "en"
                      ? "Expert in positioning our clients' websites at the top of their niche."
                      : currentLang === "es"
                        ? "Experto en posicionar los sitios web de nuestros clientes en la cima de su nicho."
                        : "Especialista em posicionar os sites dos nossos clientes no topo do seu nicho."}
                  </p>
                </div>
              </div>
              <div className="text-center h-full">
                <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col group hover:shadow-2xl hover:bg-orange-50/50 transition-all duration-300 hover:-translate-y-2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 mx-auto mb-4 text-orange-500 flex-shrink-0"
                  >
                    <Target className="w-full h-full" />
                  </motion.div>
                  <h4 className="font-semibold mb-2 flex-shrink-0">
                    {currentLang === "en"
                      ? "Marketing Specialist"
                      : currentLang === "es"
                        ? "Especialista en Marketing"
                        : "Especialista em Marketing"}
                  </h4>
                  <p className="text-sm text-gray-500 flex-grow">
                    {currentLang === "en"
                      ? "Marketing graduate with expertise in digital strategy and campaign optimization."
                      : currentLang === "es"
                        ? "Licenciado en Marketing con experiencia en estrategia digital y optimización de campañas."
                        : "Graduado em Marketing com experiência em estratégia digital e otimização de campanhas."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
            {currentLang === "en" ? "Contact Us" : currentLang === "es" ? "Contáctanos" : "Contate-nos"}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {currentLang === "en"
              ? "Ready to start your project? Fill out our form and we'll get back to you within 24 hours."
              : currentLang === "es"
                ? "¿Listo para comenzar tu proyecto? Completa nuestro formulario y te responderemos en 24 horas."
                : "Pronto para iniciar seu projeto? Preencha nosso formulário e retornaremos em 24 horas."}
          </p>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <motion.a
                href="https://forms.gle/JVjZz8qy3xFPBj7dA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-orange-200/50 transition-all duration-300 flex items-center gap-3">
                  {currentLang === "en"
                    ? "Fill out our contact form"
                    : currentLang === "es"
                      ? "Completa nuestro formulario"
                      : "Preencha nosso formulário"}
                  <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            </motion.div>

            <div className="mt-16 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-100 shadow-xl max-w-2xl mx-auto"
              >
                <div className="text-center mb-6">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-semibold text-gray-900 mb-2"
                  >
                    {currentLang === "en"
                      ? "Have Questions?"
                      : currentLang === "es"
                        ? "¿Tienes Preguntas?"
                        : "Tem Perguntas?"}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600"
                  >
                    {currentLang === "en"
                      ? "Feel free to reach out to us for any inquiries or consultations"
                      : currentLang === "es"
                        ? "No dudes en contactarnos para cualquier consulta o pregunta"
                        : "Não hesite em nos contatar para qualquer consulta ou pergunta"}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center"
                >
                  <motion.a
                    href="mailto:zenda.websites@gmail.com"
                    className="group relative inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-5 w-5 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-800 font-medium">zenda.websites@gmail.com</span>
                    <motion.span
                      className="absolute inset-0 rounded-full bg-orange-500/10"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -z-10 inset-0">
                  <div className="absolute top-1/2 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute top-1/2 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                </div>
              </motion.div>
            </div>

            {/* Social Media Links */}
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
