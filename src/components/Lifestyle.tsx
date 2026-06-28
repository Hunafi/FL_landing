import Image from "next/image";

export default function Lifestyle() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-brand-green-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Gallery / Single Image layout (Left) - Made to fit fully in one piece */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-neutral-200/50 dark:border-neutral-800 bg-neutral-50 dark:bg-[#161618]">
              <Image
                src="/women_cooking.jpg"
                alt="Két hölgy a konyhában FitLine ProShape All-in-1 shake-et készít"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                className="object-cover hover:scale-102 transition-transform duration-500"
              />
              {/* Float badge */}
              <div className="absolute bottom-4 left-4 bg-brand-teal text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-md border border-white/10">
                🌾 Glutén- & Laktózmentes receptúra
              </div>
            </div>
          </div>

          {/* Persuasive copy side (Right) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest">Életmódváltás Könnyedén</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-slate dark:text-neutral-100 tracking-tight leading-tight">
              Az Alakformálás Nem Lemondás, Hanem Új Életenergia
            </h3>
            
            <p className="text-neutral-500 dark:text-neutral-400 font-light leading-relaxed text-base">
              Felejtse el az önsanyargató diétákat és a kínzó éhségérzetet. A FitLine programot úgy tervezték, hogy zökkenőmentesen beilleszkedjen a legzsúfoltabb mindennapokba is. Ráadásul a termékek <strong>laktóz- és gluténmentesek</strong>, így az ételérzékenységgel küzdők is teljesen biztonságosan fogyaszthatják.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <h4 className="font-bold text-brand-slate dark:text-neutral-100 text-base">Csak napi 2 perc</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  A shake-ek elkészítése kevesebb mint egy percet vesz igénybe, így bárhova magával viheti őket étkezéshelyettesítőként.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-brand-slate dark:text-neutral-100 text-base">Finom ízek, nulla sóvárgás</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  A csokoládés és vaníliás shake-ek krémesek és ízletesek, így a diéta alatt sem kell lemondania a kulináris élvezetekről.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-brand-slate dark:text-neutral-100 text-base">Megtartott izomtömeg</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  A prémium fehérjék és tápanyagok biztosítják, hogy a fogyás a zsírszövetekből történjen, ne az aktív izmokból.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-brand-slate dark:text-neutral-100 text-base">Jobb közérzet</h4>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                  Az optimalizált felszívódásnak köszönhetően nemcsak karcsúbb, hanem energikusabb, koncentráltabb és vidámabb lesz.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.fitline.com/hu/hu-hu/products?sponsor=21828601&category=weightmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-full text-white bg-brand-orange hover:bg-brand-orange-hover shadow-md hover:shadow-lg transition-all duration-200"
              >
                Kezdje el a Változást Ma
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
