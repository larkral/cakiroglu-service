"use client"

import { motion } from "framer-motion"
import { Instagram, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Üst copper hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-copper/60 to-transparent" />

      {/* Yumuşak warm radyaller */}
      <div className="pointer-events-none absolute -top-48 right-0 h-[32rem] w-[32rem] rounded-full bg-copper/[0.12] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[24rem] w-[24rem] rounded-full bg-copper/[0.08] blur-[100px]" />

      {/* GRID */}
      <div className="relative px-6 md:px-12 lg:px-24 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Marka */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 space-y-5"
          >
            <div className="flex items-center gap-3">
              <span className="font-serif italic text-2xl md:text-3xl">
                Çakıroğlu Servis
              </span>
              <span className="h-px w-10 bg-copper" />
            </div>
            <p className="text-sm text-white/60 font-light leading-relaxed max-w-sm">
              Premium otomotiv için sertifikalı bakım, onarım ve detaylı tanı.
              Afyonkarahisar'da ustalığın sessiz dili.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <SocialPill
                href="https://www.instagram.com/cakroglu.servis/"
                icon={<Instagram className="w-3.5 h-3.5" />}
                label="Instagram"
              />
            </div>
          </motion.div>

          {/* Keşfet */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="md:col-span-3 space-y-4"
          >
            <div className="text-[11px] tracking-[0.3em] uppercase text-copper">
              Keşfet
            </div>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                ["Markalar", "#brands"],
                ["Hizmetler", "#services"],
                ["Hakkımızda", "#about"],
                ["İletişim", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="h-px w-0 bg-copper transition-all duration-300 group-hover:w-6" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* İletişim */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="md:col-span-4 space-y-4"
          >
            <div className="text-[11px] tracking-[0.3em] uppercase text-copper">
              Atölye
            </div>
            <ul className="space-y-4 text-sm text-white/70">
              <InfoRow icon={<MapPin className="w-4 h-4" />}>
                Afyonkarahisar, Türkiye
              </InfoRow>
              <InfoRow icon={<Phone className="w-4 h-4" />}>
                <a href="tel:+905523075842" className="hover:text-white transition-colors">
                  +90 (552) 307 58 42
                </a>
              </InfoRow>
              <InfoRow icon={<Clock className="w-4 h-4" />}>
                7/24 Hizmetinizdeyiz.
              </InfoRow>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* DEV WORDMARK İMZA */}
      <div className="relative overflow-hidden select-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1 }}
          className="px-6 md:px-12 lg:px-24"
        >
          <div className="font-serif italic text-white/[0.06] text-[20vw] md:text-[16vw] leading-[0.85] tracking-tighter whitespace-nowrap -mb-[3vw]">
            Çakıroğlu
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/40 pt-1">
  <span className="leading-none">
    © {year} Çakıroğlu Servis · Tüm hakları saklıdır.
  </span>

    <span className="flex items-center justify-center gap-2 leading-none -translate-y-[1px]">
      <span className="h-1 w-1 rounded-full bg-copper" />

      <span className="flex items-center gap-1">
        <a
          href="https://www.instagram.com/gunarslan.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-copper hover:text-white transition-colors duration-300 hover:drop-shadow-[0_0_6px_rgba(201,140,76,0.6)]"
        >
          gunarslan.tech
        </a>
        <span>tarafından tasarlanmıştır</span>
      </span>
    </span>
  </div>
    </footer>
  )
}

/* ---- helpers ---- */
function SocialPill({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:border-copper hover:bg-copper hover:text-white transition-all duration-300 text-[11px] tracking-[0.2em] uppercase text-white/80"
    >
      {icon}
      <span>{label}</span>
      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" />
    </a>
  )
}

function InfoRow({
  icon,
  children,
}: {
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid place-items-center w-8 h-8 rounded-full bg-copper/15 text-copper shrink-0">
        {icon}
      </span>
      <span className="pt-1.5">{children}</span>
    </li>
  )
}
