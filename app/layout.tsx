import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://school-15-sukhum-website.vercel.app"),
  title: "Школа №15 г. Сухум",
  description: "Сайт школы №15 города Сухум. Информация, новости, контакты.",
  verification: {
    google: "3MZ2h7O6whA7eXAHgd9zhPRn4rwPJNsH-zABdQN9UGg",
    yandex: "cd254ed0abc5875a",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Школа №15 г. Сухум",
    description: "Сайт школы №15 города Сухум. Информация, новости, контакты.",
    url: "https://school-15-sukhum-website.vercel.app",
    siteName: "Школа №15 г. Сухум",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Школа №15 г. Сухум",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Школа №15 г. Сухум",
    description: "Сайт школы №15 города Сухум. Информация, новости, контакты.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Школа №15 г. Сухум",
              url: "https://school-15-sukhum-website.vercel.app",
              description: "Сайт школы №15 города Сухум. Информация, новости, контакты.",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
