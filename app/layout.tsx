import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Çakıroğlu Servis | Premium Otomotiv Servisi",
    template: "%s | Çakıroğlu Servis",
  },

  description:
    "BMW, Mercedes-Benz, Porsche, Audi ve Range Rover için premium otomotiv servis ve mühendislik çözümleri. Hassas bakım, performans ve güven bir arada.",

  keywords: [
    "Oto Bakım",
    "Afyon araç arıza",
    "BMW servis",
    "Mercedes servis",
    "Porsche servis",
    "Audi servis",
    "Range Rover servis",
    "premium oto servis",
  ],

  authors: [{ name: "Çakıroğlu Servis" }],
  creator: "Çakıroğlu Servis",

  metadataBase: new URL("https://cakirogluservis.com"),

  openGraph: {
    title: "Çakıroğlu Servis | Premium Otomotiv Servisi",
    description:
      "BMW, Mercedes-Benz, Porsche, Audi ve Range Rover için üst düzey servis hizmeti.",
    url: "https://cakirogluservis.com",
    siteName: "Çakıroğlu Servis",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Çakıroğlu Servis Premium Garage",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Çakıroğlu Servis",
    description: "Premium otomotiv servis ve mühendislik hizmetleri",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0B0B0B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="fNQ-7RV8eZ6cnnBLD1TUTtifMD8mS8smNMWICJ4FLHU"
        />
      </head>

      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}

        {/* ANALYTICS */}
        {process.env.NODE_ENV === "production" && <Analytics />}

        {/* STRUCTURED DATA (SEO POWER BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Çakıroğlu Servis",
              url: "https://cakirogluservis.com",
              description:
                "Premium otomotiv servis ve mühendislik hizmetleri.",
              areaServed: "TR",
              serviceType: [
                "BMW Service",
                "Mercedes Service",
                "Porsche Service",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}