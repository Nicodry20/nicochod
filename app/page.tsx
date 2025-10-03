"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

export default function WalletSimulatorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="border-b bg-white sticky top-0 z-50 shadow-sm"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">W</span>
            </div>
            <span className="font-bold text-xl text-foreground">Wallet Simulator</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Diseñado para todos
            </a>
            <a href="#contacto" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-balance leading-tight"
            >
              Aprende tu billetera virtual segura y fácil
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8">
                Comenzar simulación
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 bg-transparent"
              >
                Ver tutoriales
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Funciones Principales */}
      <section className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Funciones principales</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              ),
              title: "Transferir dinero",
              items: ["Paso a paso", "Sin peligro", "Todo claro"],
              color: "primary",
            },
            {
              icon: (
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              ),
              title: "Recargar celular",
              items: ["Todas las empresas", "Montos sugeridos", "Se carga solo"],
              color: "secondary",
            },
            {
              icon: (
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              ),
              title: "Recargar SUBE",
              items: ["Muy rápida", "Historial de recargas", "Recordatorios útiles"],
              color: "primary",
            },
          ].map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="border-2 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                  <ul className="space-y-3 text-base text-muted-foreground">
                    {feature.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className={`text-${feature.color} text-xl`}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="bg-accent py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">¿Por qué elegirnos?</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ),
                title: "100% seguro",
                color: "primary",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-secondary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "A tu ritmo",
                color: "secondary",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                ),
                title: "Soporte 24/7",
                color: "primary",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 text-secondary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Certificado",
                color: "secondary",
              },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center space-y-4">
                  <div className={`w-20 h-20 bg-${item.color} rounded-full flex items-center justify-center mx-auto`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-foreground">{item.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tutoriales */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Tutoriales paso a paso</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-10 md:p-14 space-y-8 border-2 border-primary/20">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Aprende a tu ritmo</h3>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-2xl flex-shrink-0">✓</span>
                    <span>Videos despacio y claros</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-2xl flex-shrink-0">✓</span>
                    <span>Tu familia te puede ayudar</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary text-2xl flex-shrink-0">✓</span>
                    <span>Te enseñamos a estar seguro</span>
                  </li>
                </ul>
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8"
              >
                Ver todos los tutoriales
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Nuestro Impacto */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nuestro impacto</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            {[
              { number: "5,000+", label: "Usuarios activos" },
              { number: "98%", label: "Están contentos" },
              { number: "24/7", label: "Soporte disponible" },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div>
                  <div className="text-5xl md:text-6xl font-bold mb-3">{stat.number}</div>
                  <div className="text-lg text-primary-foreground/90">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-20">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Preguntas frecuentes</h2>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { question: "¿Es realmente seguro practicar?", answer: "Sí, muy" },
            { question: "¿Necesito conocimientos previos?", answer: "No, nada" },
            { question: "¿Puedo usar el simulador en mi teléfono?", answer: "Sí" },
          ].map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-xl mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-lg text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center space-y-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Comienza tu aprendizaje hoy</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8">
                Empezar ahora - Es gratis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 bg-transparent"
              >
                Hablar con soporte
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">¿Necesitas ayuda?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                ),
                title: "Teléfono",
                info: "0800-123-4567",
                buttonText: "Llamar ahora",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                ),
                title: "Chat en vivo",
                info: "Disponible ahora",
                buttonText: "Iniciar chat",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Email",
                info: "Ayuda@walletsimulator",
                buttonText: "Enviar mail",
              },
            ].map((contact, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="border-2 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-foreground">{contact.title}</h3>
                      <p className="text-base text-muted-foreground mb-4">{contact.info}</p>
                      <Button variant="outline" size="lg" className="font-semibold bg-transparent">
                        {contact.buttonText}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-accent/30 py-8">
        <div className="container mx-auto px-4 text-center text-base text-muted-foreground">
          <p>© 2025 Wallet Simulator. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
