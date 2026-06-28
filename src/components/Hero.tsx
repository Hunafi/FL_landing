import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-brand-green-dark text-brand-slate pt-16 pb-24 md:pt-24 md:pb-32 border-b border-neutral-100 dark:border-neutral-800">
      {/* Background elegant gradient elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.05),transparent_50%)]" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-teal/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Content (Left) */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 text-brand-teal text-xs font-semibold uppercase tracking-wider">
              <svg className="w-3.5 h-3.5 text-brand-teal animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708.522L3.547 10.24a.75.75 0 00.298.885l6 4a.75.75 0 00.81 0l6-4a.75.75 0 00.298-.885l-2.012-6.263a.75.75 0 00-.708-.522H6.267zm.074 1.5h7.318l1.528 4.757L10 11.968 4.813 9.712l1.528-4.757zM10 13.593L5.437 11.55l3.753 2.502a.75.75 0 00.81 0l3.753-2.502L10 13.593z" clipRule="evenodd" />
              </svg>
              Német Prémium Minőség • NTC® Technológia
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-brand-slate">
              A fenntartható <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-rose-500">
                súlycsökkentés
              </span>{" "}
              sejtszinten kezdődik.
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
              Tapasztalja meg a koplalás nélküli alakformálást. A FitLine súlykontroll program a szabadalmaztatott <strong>Nutrient Transport Concept (NTC®)</strong> segítségével oda juttatja a tápanyagokat, ahol és amikor szükség van rájuk – közvetlenül a sejtekbe. Prémium termékeink természetes módon <strong>glutén- és laktózmentesek</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://www.fitline.com/hu/hu-hu/products?sponsor=21828601&category=weightmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg hover:shadow-brand-orange/20 transition-all duration-200"
              >
                Súlykontroll termékek
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#termekek"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-200 dark:border-neutral-700 text-base font-bold rounded-full text-brand-slate dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200"
              >
                Termékek megtekintése
              </a>
            </div>
            
            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0 border-t border-neutral-100 dark:border-neutral-800">
              <div>
                <div className="text-2xl font-bold text-brand-slate">100%</div>
                <div className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-semibold">Tiszta Forrás</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-slate">NTC®</div>
                <div className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-semibold">Szabadalom</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-slate">GMP</div>
                <div className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-semibold">Minőségellenőrzés</div>
              </div>
            </div>
          </div>
          
          {/* Hero Graphics (Right) - Updated with the portrait image of the woman holding the shaker */}
          <div className="lg:col-span-6 relative flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800 shadow-2xl bg-neutral-50 dark:bg-neutral-900">
              <Image
                src="/woman_shaker.jpg"
                alt="Hölgy FitLine shakerrel és ProShape All-in-1 termékkel a konyhában"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                className="object-cover hover:scale-102 transition-transform duration-700"
              />
              {/* Highlight badge for Gluten and Lactose free */}
              <div className="absolute bottom-6 left-6 bg-brand-teal text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md border border-white/10 backdrop-blur-sm">
                🌾 Glutén- & Laktózmentes
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
