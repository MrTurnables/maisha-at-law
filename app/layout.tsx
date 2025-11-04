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
  title: {
    default: "Maisha at Law | Expert Legal Counsel in Accra, Ghana",
    template: "%s | Maisha at Law"
  },
  description: "Leading law firm in Accra, Ghana providing comprehensive legal services in corporate law, family law, criminal defense, real estate, personal injury, and estate planning. 25+ years experience, 98% success rate.",
  keywords: [
    "law firm Accra",
    "lawyer Ghana",
    "attorney Accra",
    "legal services Ghana",
    "corporate law Ghana",
    "family law Accra",
    "criminal defense Ghana",
    "real estate lawyer Accra",
    "personal injury attorney Ghana",
    "estate planning lawyer",
    "business lawyer Accra",
    "divorce attorney Ghana"
  ],
  authors: [{ name: "Maisha at Law", url: "https://maishaatlaw.com" }],
  creator: "Maisha at Law",
  publisher: "Maisha at Law",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://maishaatlaw.com",
    siteName: "Maisha at Law",
    title: "Maisha at Law | Expert Legal Counsel in Accra, Ghana",
    description: "Leading law firm in Accra, Ghana providing comprehensive legal services. 25+ years experience, 98% success rate. Contact us for expert legal representation.",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
        alt: "Maisha at Law - Professional Legal Services in Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maisha at Law | Expert Legal Counsel in Accra, Ghana",
    description: "Leading law firm in Accra, Ghana. 25+ years experience, 98% success rate. Corporate, family, criminal defense & more.",
    images: ["/img1.jpg"],
    creator: "@maishaatlaw",
  },
  alternates: {
    canonical: "https://maishaatlaw.com",
  },
  category: "legal services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GH">
      <head>
        <link rel="canonical" href="https://maishaatlaw.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
