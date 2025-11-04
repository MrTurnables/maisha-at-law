import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Script from "next/script";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Maisha at Law",
  "description": "Leading law firm in Accra, Ghana providing comprehensive legal services in corporate law, family law, criminal defense, real estate, personal injury, and estate planning.",
  "url": "https://maishaatlaw.com",
  "logo": "https://maishaatlaw.com/android-chrome-512x512.png",
  "image": "https://maishaatlaw.com/img1.jpg",
  "telephone": "+233209844941",
  "email": "info@maishaatlaw.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Pigfarm",
    "addressLocality": "Accra",
    "addressCountry": "GH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "5.6037",
    "longitude": "-0.1870"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "Ghana"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Legal Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Law",
          "description": "Comprehensive business legal solutions for companies of all sizes"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Family Law",
          "description": "Compassionate guidance through family legal matters"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Criminal Defense",
          "description": "Aggressive representation to protect your rights and freedom"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Real Estate Law",
          "description": "Expert guidance for all your real estate transactions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Injury",
          "description": "Fighting for the compensation you deserve after an injury"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Estate Planning",
          "description": "Secure your legacy and protect your loved ones"
        }
      }
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Taiba Mashoud",
    "jobTitle": "Managing Partner"
  }
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Stats />
        <About />
        <PracticeAreas />
        <WhyChooseUs />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
