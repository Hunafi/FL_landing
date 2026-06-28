"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Hogyan támogatják a FitLine termékek a súlycsökkentést?",
    answer: "A FitLine termékek nem gyors csodaszerek, hanem a szervezet természetes anyagcsere-folyamatait és emésztését optimalizálják. A TopShape rostkomplex segít csökkenteni a kalóriabevitelt a jóllakottságérzet növelésével, míg a ProShape All-in-1 shake-ek teljes értékű étkezéshelyettesítőként biztosítják a szükséges tápanyagokat és fehérjéket, elkerülve a koplalást és az izomvesztést."
  },
  {
    question: "Mi az az NTC® (Tápanyag-szállítási Koncepció)?",
    answer: "Az NTC® a PM-International tudományos csapatának egyedülálló, szabadalmaztatott koncepciója. Biztosítja, hogy a tápanyagok pontosan oda jussanak, ahol és amikor szükség van rájuk – sejtszinten. Ennek köszönhetően a FitLine termékek felszívódása és biohasznosulása többszöröse a hagyományos tablettás táplálékkiegészítőkének."
  },
  {
    question: "Hogyan kell alkalmazni a termékeket az optimális eredményért?",
    answer: "A fenntartható súlycsökkentéshez javasoljuk, hogy napi két főétkezést (például a reggelit és a vacsorát) váltson ki egy-egy krémes ProShape All-in-1 shake-kel. A harmadik étkezés legyen egy kiegyensúlyozott, vegyes étkezés. A TopShape rostkomplexet főétkezések előtt 15-30 perccel javasolt fogyasztani bőséges vízzel, míg a Herbaslim teát egész nap elosztva érdemes inni a folyadékpótlás és méregtelenítés érdekében."
  },
  {
    question: "Biztonságosak a FitLine termékek? Szerepelnek a Kölni Listán?",
    answer: "Igen, a biztonság a legfőbb prioritásunk. Minden FitLine termék Németországban készül, a gyógyszeriparban alkalmazott legszigorúbb GMP minőségbiztosítási szabványok szerint. Ezenkívül minden termékünk szerepel a Kölni Listán® (Kölner Liste), ami független laboratóriumi igazolást jelent arra, hogy doppingmentesek, nehézfémektől és egyéb szennyeződésektől mentesek."
  },
  {
    question: "Hogyan tudok rendelni, és mennyi idő alatt érkeznek meg a termékek?",
    answer: "A weboldalon található vásárlási gombok közvetlenül a hivatalos FitLine online áruházba irányítják Önt. A megrendelését közvetlenül a PM-International központi raktára dolgozza fel, és futárszolgálattal szállítja ki az Ön magyarországi címére, általában 2-4 munkanapon belül."
  },
  {
    question: "Van-e garancia a termékekre?",
    answer: "Igen! A PM-International teljes mértékben bízik a termékek hatékonyságában, ezért egyedülálló, 30 napos elégedettségi garanciát vállal. Ha bármilyen okból nem elégedett a termékkel, a vásárlástól számított 30 napon belül visszaküldheti a dobozt (akár teljesen üresen vagy félig elfogyasztva is), és visszakapja a termék vételárát."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white dark:bg-brand-green-dark relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest">Gyakran Ismételt Kérdések</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-green-dark dark:text-neutral-100 tracking-tight">
            Kérdések és Válaszok a FitLine-ról
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
            Szeretnénk, ha minden információ birtokában hozná meg a döntését. Íme a leggyakoribb kérdések, amelyek a súlykontroll program kapcsán felmerülnek.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? "border-brand-teal bg-teal-50/10 dark:bg-brand-teal/[0.03] shadow-sm"
                    : "border-neutral-200 dark:border-neutral-800 bg-brand-cream/40 dark:bg-[#161618] hover:bg-brand-cream/80 dark:hover:bg-[#1f1f23]"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-brand-green-dark dark:text-neutral-100 pr-4">
                    {item.question}
                  </span>
                  <span className="shrink-0 ml-2">
                    {isOpen ? (
                      <svg className="w-5 h-5 text-brand-teal transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-neutral-400 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Animated content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-6 pb-6 text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed border-t border-neutral-100/50 dark:border-neutral-800 pt-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
