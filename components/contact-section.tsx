"use client"

import { motion } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react"

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 552 307 5842",
    href: "tel:+905523075842",
  },
  {
    icon: Mail,
    label: "E-posta",
    value: "mertckr17@gmail.com",
    href: "mailto:mertckr17@gmail.com",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Güvenevler Mh. 623. Sk. No:18/A Afyonkarahisar",
    href: "https://maps.google.com/?q=Güvenevler%20Mahallesi%20623.%20Sokak%20No:18/A%20Afyonkarahisar",
  },
  {
    icon: Clock,
    label: "Çalışma",
    value: "7/24 hizmetinizdeyiz.",
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-white text-black py-20 md:py-32 px-5 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Üst copper hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper/60 to-transparent" />

      {/* Yumuşak warm radyal */}
      <div className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-copper/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[24rem] w-[24rem] rounded-full bg-copper/[0.05] blur-[100px]" />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-copper">
            — İletişim
          </span>

          <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-medium leading-[1.05] tracking-tight">
            <span className="italic text-copper">Randevu</span> alın,
            <br />
            gerisini bize bırakın.
          </h2>

          <p className="mt-6 text-base text-black/60 max-w-md font-light leading-relaxed">
            Premium servis deneyimi için bize ulaşın. Aracınızı en kısa sürede
            uzman ekibimiz teslim alır.
          </p>

          {/* CONTACT LIST */}
          <ul className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {contactItems.map((item, i) => {
              const Wrapper: React.ElementType = item.href ? "a" : "div"
              return (
                <li key={i}>
                  <Wrapper
                    {...(item.href
                      ? {
                          href: item.href,
                          target: item.href.startsWith("http") ? "_blank" : undefined,
                          rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                        }
                      : {})}
                    className="group relative flex items-center gap-4 py-5 transition-all duration-300 hover:pl-3"
                  >
                    {/* ICON */}
                    <div className="grid place-items-center w-11 h-11 rounded-full bg-black/[0.04] border border-black/10 group-hover:bg-copper group-hover:border-copper transition-all duration-300 shrink-0">
                      <item.icon className="w-4 h-4 text-black/60 group-hover:text-white transition" />
                    </div>

                    {/* TEXT */}
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] tracking-[0.25em] uppercase text-black/40">
                        {item.label}
                      </div>
                      <div className="mt-0.5 text-sm md:text-base text-black truncate group-hover:text-copper transition-colors">
                        {item.value}
                      </div>
                    </div>

                    {/* ARROW */}
                    {item.href && (
                      <ArrowUpRight className="w-4 h-4 text-black/30 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-copper transition-all" />
                    )}
                  </Wrapper>
                </li>
              )
            })}
          </ul>

          {/* CTA's */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/905523075842"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-black text-white pl-5 pr-4 py-3.5 rounded-full hover:bg-copper transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs tracking-[0.25em] uppercase">WhatsApp</span>
              <span className="grid place-items-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </a>

            <a
              href="tel:+905523075842"
              className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-black/15 text-xs tracking-[0.25em] uppercase hover:border-copper hover:text-copper transition-all"
            >
              <Phone className="w-4 h-4" />
              Hemen Ara
            </a>
          </div>
        </motion.div>

        {/* RIGHT — MAP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 lg:sticky lg:top-24"
        >
          <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[560px] overflow-hidden rounded-2xl border border-black/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)] bg-black/[0.02]">
            <iframe
              src="https://www.google.com/maps?q=Güvenevler%20Mahallesi%20623.%20Sokak%20No:18/A%20Afyonkarahisar&z=18&output=embed"
              className="w-full h-full block"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Çakıroğlu Servis Konum"
            />

            {/* Sol üst rozet */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/95 backdrop-blur border border-black/10 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-copper opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-copper" />
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-black/70">
                Atölye
              </span>
            </div>

            {/* Alt yol tarifi pill */}
            <a
              href="https://maps.google.com/?q=Güvenevler%20Mahallesi%20623.%20Sokak%20No:18/A%20Afyonkarahisar"
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black text-white hover:bg-copper transition-colors duration-300 text-[11px] tracking-[0.25em] uppercase shadow-lg"
            >
              Yol tarifi
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </div>

          {/* Adres altyazısı */}
          <div className="mt-4 flex items-start gap-2 text-xs text-black/50 px-1">
            <MapPin className="w-3.5 h-3.5 mt-0.5 text-copper shrink-0" />
            <span>Güvenevler Mh. 623. Sk. No:18/A · Afyonkarahisar</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
