"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type Brand = {
  name: string
  logo: string
  country: string
  flag: string
  founded: number
  tagline: string
}

const brands: Brand[] = [
  { name: "BMW", logo: "/logos/bmw.svg", country: "Almanya", flag: "🇩🇪", founded: 1916, tagline: "Sürüş zevkinin saf hali." },
  { name: "Mercedes", logo: "/logos/mercedes.svg", country: "Almanya", flag: "🇩🇪", founded: 1926, tagline: "Lüksün mühendislik tanımı." },
  { name: "Audi", logo: "/logos/audi.svg", country: "Almanya", flag: "🇩🇪", founded: 1909, tagline: "Teknolojiyle ilerleyiş." },
  { name: "Volkswagen", logo: "/logos/volkswagen.svg", country: "Almanya", flag: "🇩🇪", founded: 1937, tagline: "Halkın mühendisliği." },
  { name: "Land-Rover", logo: "/logos/land-rover.svg", country: "İngiltere", flag: "🇬🇧", founded: 1948, tagline: "Asil-Güçlü-Özgür." },
  { name: "Mini", logo: "/logos/mini.svg", country: "İngiltere", flag: "🇬🇧", founded: 1959, tagline: "İkonik karakter, küçük gövde." },
]

const ROTATE_MS = 4500

export function BrandsSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const progressRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (paused) return
    progressRef.current = setInterval(() => {
      setActive((p) => (p + 1) % brands.length)
    }, ROTATE_MS)

    return () => {
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [paused])

  const current = brands[active]

  return (
    <section className="relative bg-graphite text-warm-white py-24 md:py-36 overflow-hidden">

      {/* PREMIUM BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[size:28px_28px]" />

      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,115,51,0.18),transparent_60%)]"
      />

      <div className="relative px-6 md:px-12 lg:px-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] tracking-[0.35em] uppercase text-copper">
            — Premium Partner Network
          </span>

          <h2 className="mt-3 text-4xl md:text-6xl font-serif leading-[1.05]">
            Çalıştığımız <span className="italic text-copper">markalar</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-white/50 max-w-md">
            Alman mühendisliğinden İskandinav tasarımına kadar premium otomotiv dünyasının seçkin markaları.
          </p>
        </motion.div>

        {/* MAIN STAGE */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-10 items-stretch"
        >

          {/* LEFT SHOWCASE */}
          <div className="lg:col-span-8 relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden min-h-[520px] shadow-[0_0_120px_-60px_rgba(0,0,0,0.8)]">

            {/* soft glow frame */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent" />

            {/* COUNTER */}
            <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
              <span className="text-copper font-serif italic text-xl">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-10 bg-copper/40" />
              <span className="text-[11px] tracking-[0.3em] text-white/40">
                {String(brands.length).padStart(2, "0")}
              </span>
            </div>

            {/* ACTIVE CONTENT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
              >

                {/* BIG BACK TEXT */}
                <span className="absolute text-[18vw] md:text-[12vw] font-serif italic text-white/[0.04] select-none">
                  {current.name}
                </span>

                {/* LOGO */}
                <div className="relative w-44 h-44 md:w-60 md:h-60">
                  <div className="absolute inset-0 bg-copper/20 blur-3xl rounded-full animate-pulse" />
                  <Image
                    src={current.logo}
                    alt={current.name}
                    fill
                    className="object-contain drop-shadow-[0_10px_40px_rgba(184,115,51,0.35)]"
                  />
                </div>

                {/* TAGLINE */}
                <div className="mt-6">
                  <p className="text-white/50 text-sm tracking-[0.25em] uppercase">
                    {current.flag} {current.country} • {current.founded}
                  </p>

                  <p className="mt-3 font-serif italic text-2xl md:text-3xl">
                    "{current.tagline}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* PROGRESS BAR */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
              <motion.div
                key={active + paused.toString()}
                initial={{ width: "0%" }}
                animate={{ width: paused ? "0%" : "100%" }}
                transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                className="h-full bg-gradient-to-r from-copper to-orange-300"
              />
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="lg:col-span-4 flex flex-col gap-3">

            {brands.map((b, i) => {
              const isActive = i === active

              return (
                <motion.button
                  key={b.name}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActive(i)}
                  className={`relative flex items-center gap-4 p-4 rounded-2xl border transition-all
                    ${
                      isActive
                        ? "border-copper bg-white/[0.06]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/30"
                    }`}
                >

                  {/* glow bar */}
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-r bg-copper transition-all
                      ${isActive ? "h-10" : "h-0"}`}
                  />

                  <div className="relative w-14 h-14 rounded-xl bg-white/5 overflow-hidden">
                    <Image
                      src={b.logo}
                      alt={b.name}
                      fill
                      className={`object-contain p-2 transition-all ${
                        isActive ? "opacity-100" : "opacity-60"
                      }`}
                    />
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-medium">{b.name}</p>
                    <p className="text-[10px] tracking-[0.25em] text-white/40">
                      {b.country}
                    </p>
                  </div>
                </motion.button>
              )
            })}

          </div>
        </div>

        {/* bottom nav */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-[11px] tracking-[0.3em] uppercase">
          {brands.map((b, i) => (
            <button
              key={b.name}
              onClick={() => setActive(i)}
              className={`transition ${
                i === active ? "text-copper" : "text-white/30 hover:text-white/60"
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}