"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    id: "01",
    title: "Diagnostics",
    subtitle: "Teşhis",
    description: "Gelişmiş bilgisayar teşhis sistemleri ile hassas arıza tespiti.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2032&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Engine Service",
    subtitle: "Motor Servisi",
    description: "Komple motor bakım ve onarım hizmetleri.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Precision Maintenance",
    subtitle: "Hassas Bakım",
    description: "Periyodik bakım ve önleyici servis hizmetleri.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2128&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Electrical Systems",
    subtitle: "Elektrik Sistemleri",
    description: "Elektrik ve elektronik sistem arıza tespiti ve onarımı.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Transmission",
    subtitle: "Şanzıman",
    description: "Otomatik ve manuel şanzıman bakım ve onarımı.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Brake Systems",
    subtitle: "Fren Sistemleri",
    description: "Yüksek performanslı fren sistemi servisi.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <section id="services" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-off-white via-white to-off-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20 max-w-2xl"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-copper">
          Hizmetlerimiz
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-light text-foreground tracking-tight">
          Premium Servis Deneyimi
        </h2>
        <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
          Her araç benzersizdir. Uzman ekibimiz, aracınıza özel çözümler sunar.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative bg-background p-8 md:p-10 cursor-pointer rounded-xl overflow-hidden border border-transparent hover:border-copper hover:shadow-lg hover:shadow-copper/30 transition-all"
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            {/* Background Image on Hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeService === service.id ? 0.15 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-16">
                <span className="text-[10px] tracking-widest text-muted-foreground font-mono">
                  {service.id}
                </span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: activeService === service.id ? 1 : 0,
                    scale: activeService === service.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-copper" />
                </motion.div>
              </div>

              <h3 className="text-xl font-medium text-foreground tracking-tight mb-2">
                {service.title}
              </h3>
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                {service.subtitle}
              </span>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: activeService === service.id ? 1 : 0,
                  y: activeService === service.id ? 0 : 10,
                }}
                transition={{ duration: 0.3 }}
                className="mt-6 text-sm text-muted-foreground leading-relaxed"
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
