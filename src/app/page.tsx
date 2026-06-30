import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductShowcase from "@/components/ProductShowcase";
import Benefits from "@/components/Benefits";
import Science from "@/components/Science";
import Testimonials from "@/components/Testimonials";
import Lifestyle from "@/components/Lifestyle";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Súlycsökkentés & Életmódváltás | Hivatalos Ajánlói Oldal",
  description: "Tapasztalja meg a fenntartható súlycsökkentést és zsírégetést prémium termékekkel. Kölni Listás tisztaság, német minőség és szabadalmaztatott NTC® technológia.",
  keywords: [
    "Súlykontroll program",
    "TopShape rostkomplex",
    "egészséges súlycsökkentés",
    "fogyókúra éhezés nélkül",
    "ProShape All-in-1",
    "NTC technológia",
    "fogyás koplalás nélkül",
    "anyagcsere felpörgetése"
  ],
  openGraph: {
    title: "Súlycsökkentés & Életmódváltás | Prémium Wellness Megoldások",
    description: "Fenntartható alakformálás és vitalitás a szabadalmaztatott NTC® sejtszintű felszívódással. Német prémium minőség és 30 napos garancia.",
    type: "website",
    locale: "hu_HU",
  }
};

export default function Home() {
  // Schema.org structured data for SEO rich snippets (Product & FAQ)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "TopShape Starter Set",
        "image": "/topshape_starterset.png",
        "description": "Komplex testsúlycsökkentő csomag a látványos és tartós eredményekért, szabadalmaztatott NTC® technológiával.",
        "brand": {
          "@type": "Brand",
          "name": "Premium"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://www.fitline.com/hu/hu-hu/products?sponsor=21828601&category=weightmanagement",
          "priceCurrency": "HUF",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "PM-International AG"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Hogyan támogatják a termékek a súlycsökkentést?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A termékek a szervezet természetes anyagcsere-folyamatait és emésztését optimalizálják. A TopShape rostkomplex segít csökkenteni a kalóriabevitelt a jóllakottságérzet növelésével, míg a ProShape All-in-1 shake-ek teljes értékű étkezéshelyettesítőként biztosítják a szükséges tápanyagokat."
            }
          },
          {
            "@type": "Question",
            "name": "Mi az az NTC® (Tápanyag-szállítási Koncepció)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Az NTC® a PM-International tudományos csapatának szabadalmaztatott koncepciója, amely a tápanyagokat közvetlenül a sejtekhez juttatja, ott fejtve ki hatásukat, ahol és amikor szükség van rájuk, többszörösére növelve a biohasznosulást."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      {/* Schema.org Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* Trust Bar */}
          <TrustBar />

          {/* Products Showcase */}
          <ProductShowcase />

          {/* Benefits Section */}
          <Benefits />

          {/* Science Section */}
          <Science />

          {/* Testimonials */}
          <Testimonials />

          {/* Lifestyle & Transformation Section */}
          <Lifestyle />

          {/* FAQ Accordion */}
          <Faq />

          {/* Final CTA Section with urgency */}
          <FinalCta />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
