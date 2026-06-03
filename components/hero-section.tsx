"use client"

import { motion } from "framer-motion"
import { ArrowDown, Menu, X } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-5 md:px-12 lg:px-24 py-6 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-baseline gap-2"
        >
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wide text-foreground">
            Çakıroğlu
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground font-light">
            servis
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="hidden md:flex items-center gap-12 text-xs tracking-widest uppercase text-muted-foreground"
        >
          <a href="#brands" className="hover:text-foreground transition-colors duration-300">
            Markalar
          </a>
          <a href="#services" className="hover:text-foreground transition-colors duration-300">
            Hizmetler
          </a>
          <a href="#about" className="hover:text-foreground transition-colors duration-300">
            Hakkımızda
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors duration-300">
            İletişim
          </a>
        </motion.div>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:block text-xs tracking-widest uppercase border border-foreground/20 px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Randevu
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-background/95 backdrop-blur-sm absolute top-[72px] left-0 right-0 z-40"
      >
        <div className="flex flex-col px-5 py-6 gap-4 border-b border-secondary">
          <a href="#brands" onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Markalar
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Hizmetler
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Hakkımızda
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            İletişim
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center text-sm tracking-widest uppercase border border-foreground/20 px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Randevu Al
          </a>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative flex-1 flex flex-col px-5 md:px-12 lg:px-24">
        {/* Mobile Layout */}
        <div className="flex flex-col lg:hidden flex-1 justify-center py-8">
          {/* Mobile Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mb-8 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <video
            className="w-full h-full object-cover transition-transform duration-700 ease-out"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-foreground/70 font-medium">
                Est. 2014
              </span>
            </motion.div>
          </motion.div>

          {/* Mobile Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-foreground/30"></div>
              <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-medium">
                AFYONKARAHİSAR
              </span>
              <div className="h-px w-8 bg-foreground/30"></div>
            </div>
            
            <h1>
              <span className="block font-serif text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                Çakıroğlu
              </span>
              <span className="block text-base font-light tracking-[0.2em] uppercase text-muted-foreground/70 mt-1">
                Oto Servis
              </span>
            </h1>
            
            <p className="mt-6 text-sm font-light tracking-wide text-muted-foreground leading-relaxed max-w-xs mx-auto">
              Mükemmellik arayışında, hassasiyet ve ustalıkla. Her detayda kalite.
            </p>

            {/* Mobile CTAs */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="#contact"
                className="w-full py-4 bg-foreground text-background text-xs tracking-widest uppercase font-medium hover:bg-foreground/80 transition-colors duration-300"
              >
                Randevu Al
              </a>
              <a
                href="#services"
                className="w-full py-4 border border-foreground/20 text-foreground text-xs tracking-widest uppercase font-medium hover:border-foreground transition-colors duration-300"
              >
                Hizmetlerimiz
              </a>
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-1 items-center justify-between gap-24 py-16">
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-1 max-w-xl"
          >
            <h1 className="text-editorial">
              <span className="block font-serif text-7xl xl:text-8xl font-bold tracking-tight text-foreground leading-[0.95]">
                Çakıroğlu
              </span>
              <br />
              <span className="block text-xl xl:text-2xl font-light tracking-[0.2em] uppercase text-muted-foreground/70 mt-2">
                Oto Servis
              </span>
            </h1>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-foreground/30"></div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                AFYONKARAHİSAR
              </p>
            </div>
            <p className="mt-8 text-base font-light tracking-wide text-muted-foreground max-w-md leading-relaxed">
              Mükemmellik arayışında, hassasiyet ve ustalıkla. Her detayda kalite, her hizmette güven.
            </p>
            <div className="mt-12 flex items-center gap-8">
              <a
                href="#contact"
                className="px-8 py-4 bg-foreground text-background text-xs tracking-widest uppercase font-medium hover:bg-foreground/80 transition-colors duration-300"
              >
                Randevu Al
              </a>
              <a
                href="#services"
                className="text-xs tracking-widest uppercase text-foreground hover:text-muted-foreground transition-colors duration-300 flex items-center gap-2"
              >
                <span>Hizmetlerimiz</span>
                <ArrowDown className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Right: Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="flex-1 relative w-full max-w-2xl aspect-[4/3]"
          >
            
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-transparent" />
            <video
            className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105 rounded-xl order-1 md:order-2"
            muted
            loop
            playsInline
            preload="metadata"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause()
              e.currentTarget.currentTime = 0
            }}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

            <div className="absolute bottom-6 right-6 text-right">
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                Est. 2014
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom: Scroll Indicator - Desktop Only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Keşfet
          </span>
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
