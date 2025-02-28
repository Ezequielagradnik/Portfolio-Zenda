"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, ExternalLink, Code, Palette, Search } from "lucide-react"
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
                  ? "A 17-year-old UX/UI design genius with an exceptional eye for creating beautiful and intuitive user experiences."
                  : currentLang === "es"
                    ? "Un genio del diseño UX/UI de 17 años con un ojo excepcional para crear experiencias de usuario hermosas e intuitivas."
                    : "Um gênio do design UX/UI de 17 anos com um olhar excepcional para criar experiências de usuário bonitas e intuitivas."}
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
                {currentLang === "en"
                  ? "A 17-year-old programming prodigy who started coding at age 12, turning complex technical challenges into elegant solutions."
                  : currentLang === "es"
                    ? "Un prodigio de la programación de 17 años que comenzó a programar a los 12, convirtiendo desafíos técnicos complejos en soluciones elegantes."
                    : "Um prodígio da programação de 17 anos que começou a programar aos 12, transformando desafios técnicos complexos em soluções elegantes."}
              </p>
            </motion.div>
          </div>

          {/* Extended Team */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
              {currentLang === "en" ? "Extended Team" : currentLang === "es" ? "Equipo Extendido" : "Equipe Estendida"}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center h-full">
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                  <Code className="w-12 h-12 mx-auto mb-4 text-orange-500 flex-shrink-0" />
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
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                  <Palette className="w-12 h-12 mx-auto mb-4 text-orange-500 flex-shrink-0" />
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
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                  <Search className="w-12 h-12 mx-auto mb-4 text-orange-500 flex-shrink-0" />
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-orange-50">
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

            {/*<div className="mt-12 flex flex-col items-center gap-4">
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
            </div>*/}
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

