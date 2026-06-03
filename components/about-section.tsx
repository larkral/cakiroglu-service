"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"

const stats = [
  { value: 10, suffix: "+", label: "Yıllık Deneyim" },
  { value: 5000, suffix: "+", label: "Araç Servisi" },
  { value: 100, suffix: "%", label: "Memnuniyet" },
]

const values = ["Hassasiyet", "Güven", "Kalite", "Deneyim"]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-graphite text-warm-white py-20 md:py-32 overflow-hidden"
    >
      {/* Hafif copper glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-copper/10 blur-[100px]" />

      <div className="relative px-6 md:px-12 lg:px-24">
        {/* BAŞLIK */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] tracking-[0.25em] uppercase text-copper">
            Hakkımızda
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1]">
            Ustalığın <span className="italic text-copper">sessiz</span> dili.
          </h2>
        </motion.div>

        {/* GÖRSEL + HİKAYE */}
        <div className="mt-12 md:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Görsel */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/10] overflow-hidden rounded-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=2070&auto=format&fit=crop"
              alt="Çakıroğlu Servis"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-copper animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-warm-white/80">
                Afyonkarahisar
              </span>
            </div>

            <p className="absolute bottom-5 left-5 right-5 font-serif italic text-base sm:text-lg md:text-xl text-warm-white">
              "Bir motorun ritmini dinlemek, ona saygı duymakla başlar."
            </p>
          </motion.div>

          {/* Metin */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 lg:pt-6 space-y-6"
          >
            <p className="text-base text-silver/80 font-light leading-relaxed">
              Premium otomotiv dünyası sıradan bir bakımla yetinmez. Çakıroğlu Servis, 
              her aracı kendine özgü bir karakter olarak görür ve mühendisliğine 
              hak ettiği saygıyı gösterir.
            </p>
            <div className="h-px w-12 bg-copper/60" />
            <p className="text-sm text-silver/60 font-light leading-relaxed">
              Sertifikalı teknisyenler, orijinal ekipmanlar ve şeffaf süreçler — 
              tek hedef: <span className="text-warm-white">içiniz rahat bir sürüş.</span>
            </p>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="mt-16 md:mt-24 border-t border-b border-white/10 py-8 md:py-12 grid grid-cols-3 divide-x divide-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-2 sm:px-6 flex flex-col items-center text-center"
            >
              <div className="flex items-baseline">
                <Counter to={s.value} />
                <span className="text-2xl sm:text-3xl md:text-5xl font-serif text-copper">
                  {s.suffix}
                </span>
              </div>
              <p className="mt-2 text-[9px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-silver/60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* DEĞERLER */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex items-center gap-3 py-3 border-t border-white/10"
            >
              <span className="text-[11px] text-copper tabular-nums">
                0{i + 1}
              </span>
              <span className="text-xs sm:text-sm tracking-[0.15em] uppercase text-silver/70 group-hover:text-warm-white transition-colors">
                {v}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Animasyonlu sayaç */
function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("tr-TR"))

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, to, { duration: 1.8, ease: "easeOut" })
    return () => controls.stop()
  }, [inView, to, count])

  useEffect(() => rounded.on("change", (v) => {
    if (ref.current) ref.current.textContent = v
  }), [rounded])

  return (
    <span
      ref={ref}
      className="text-3xl sm:text-4xl md:text-6xl font-serif font-medium text-warm-white tabular-nums"
    >
      0
    </span>
  )
}
