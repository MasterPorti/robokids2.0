import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://robokidsedu.com'),
  title: {
    default: "Curso de Robótica para Niños y Jóvenes en Coacalco y Cuautitlán Izcalli | Robokids",
    template: "%s | Robokids Education"
  },
  description: "Curso de robótica para niños y jóvenes en Coacalco y Cuautitlán Izcalli, Estado de México. Clases muestra GRATIS de robótica, corte láser e impresión 3D. Escuela de robótica #1. Agenda tu clase gratis hoy.",
  keywords: [
    "curso de robótica para niños",
    "curso de robótica para jóvenes",
    "robótica para niños Coacalco",
    "robótica Coacalco Estado de México",
    "escuela de robótica Coacalco",
    "clases de robótica Coacalco",
    "robótica Cofradía",
    "robótica Periférico",
    "robótica Cuautitlán Izcalli",
    "robótica Estado de México",
    "curso robótica Cuautitlán Izcalli",
    "escuela robótica Cuautitlán Izcalli",
    "clases robótica Cuautitlán Izcalli",
    "curso robótica cerca de mí",
    "clases robótica niños",
    "robótica educativa Coacalco",
    "taller de robótica Coacalco",
    "robótica para adolescentes",
    "programación robots niños",
    "curso corte láser Coacalco",
    "impresión 3D Coacalco",
    "tecnología para niños Coacalco"
  ],
  authors: [{ name: "Robokids Education" }],
  creator: "Robokids Education",
  publisher: "Robokids Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://robokidsedu.com",
    siteName: "Robokids Education",
    title: "Curso de Robótica para Niños y Jóvenes en Coacalco y Cuautitlán Izcalli | Robokids",
    description: "Curso de robótica para niños y jóvenes en Coacalco y Cuautitlán Izcalli, Estado de México. Clases muestra GRATIS. Escuela de robótica #1.",
    images: [
      {
        url: "/roboticaFire.png",
        width: 1200,
        height: 630,
        alt: "Curso de Robótica para Niños en Coacalco - Robokids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de Robótica para Niños y Jóvenes en Coacalco | Robokids",
    description: "Curso de robótica para niños y jóvenes en Coacalco, Estado de México. Clases muestra GRATIS. Escuela de robótica #1.",
    images: ["/roboticaFire.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Agregar códigos de verificación cuando los tengas
    // google: "tu-codigo-google",
    // yandex: "tu-codigo-yandex",
    // yahoo: "tu-codigo-yahoo",
  },
  alternates: {
    canonical: "https://robokidsedu.com",
  },
  other: {
    "geo.region": "MX-MEX",
    "geo.placename": "Coacalco de Berriozábal, Cuautitlán Izcalli",
    "geo.position": "19.6319;-99.1083",
    "ICBM": "19.6319, -99.1083",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
