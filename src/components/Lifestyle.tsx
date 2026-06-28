import Image from "next/image";

export default function Lifestyle() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Gallery / Image side (Left) */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            
            {/* Main Lifestyle Image */}
            <div className="col-span-8 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600"
                alt="Egészséges reggeli összetevők"
                fill
                sizes="(max-width: 600px) 100vw, 400px"
                loading="lazy"
                className="object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
            
            {/* Overlapping secondary image */}
            <div className="col-span-4 self-end relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white sm:translate-y-6 sm:-translate-x-8">
              <Image
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=400"
                alt="Aktív szabadtéri mozgás"
                fill
                sizes="(max-width: 600px) 50vw, 200px"
                loading="lazy"
                className="object-cover"
              />
            </div>

            {/* Float badge */}
            <div className="absolute -top-4 right-6 sm:right-12 bg-brand-teal text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-lg border border-white/10">
              🌱 Természetes hatóanyagok
            </div>
          </div>

          {/* Persuasive copy side (Right) */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest">Életmódváltás Könnyedén</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-slate tracking-tight leading-tight">
              Az Alakformálás Nem Lemondás, Hanem Új Életenergia
            </h3>
            
            <p className="text-neutral-500 font-light leading-relaxed">
              Felejtse el az önsanyargató diétákat és a kínzó éhségérzetet. A FitLine programot úgy tervezték, hogy zökkenőmentesen beilleszkedjen a legzsúfoltabb mindennapokba is.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <h4 className="font-bold text-brand-slate text-base">Csak napi 2 perc</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  A shake-ek elkészítése kevesebb mint egy percet vesz igénybe, így bárhova magával viheti őket étkezéshelyettesítőként.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-brand-slate text-base">Finom ízek, nulla sóvárgás</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  A csokoládés és vaníliás shake-ek krémesek és ízletesek, így a diéta alatt sem kell lemondania a kulináris élvezetekről.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-brand-slate text-base">Megtartott izomtömeg</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  A prémium fehérjék és tápanyagok biztosítják, hogy a fogyás a zsírszövetekből történjen, ne az aktív izmokból.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-brand-slate text-base">Jobb közérzet</h4>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Az optimalizált felszívódásnak köszönhetően nemcsak karcsúbb, hanem energikusabb, koncentráltabb és vidámabb lesz.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://www.fitline.com/?sponsor=21828601"
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
