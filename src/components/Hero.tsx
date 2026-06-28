import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-brand-slate pt-16 pb-24 md:pt-24 md:pb-32 border-b border-neutral-100">
      {/* Background elegant gradient elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.05),transparent_50%)]" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-teal/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Content (Left) */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-50 border border-neutral-200/80 text-brand-teal text-xs font-semibold uppercase tracking-wider">
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
            
            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
              Tapasztalja meg a koplalás nélküli alakformálást. A FitLine súlykontroll program a szabadalmaztatott <strong>Nutrient Transport Concept (NTC®)</strong> segítségével oda juttatja a tápanyagokat, ahol és amikor szükség van rájuk – közvetlenül a sejtekbe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://www.fitline.com/?sponsor=21828601"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg hover:shadow-brand-orange/20 transition-all duration-200"
              >
                Súlykontroll Termékek Vásárlása
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#termekek"
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-200 text-base font-bold rounded-full text-brand-slate hover:bg-neutral-50 transition-all duration-200"
              >
                Termékek megtekintése
              </a>
            </div>
            
            {/* Trust highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto lg:mx-0 border-t border-neutral-100">
              <div>
                <div className="text-2xl font-bold text-brand-slate">100%</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Tiszta Forrás</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-slate">NTC®</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Szabadalom</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-brand-slate">GMP</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Minőségellenőrzés</div>
              </div>
            </div>
          </div>
          
          {/* Hero Graphics (Right) - Scaled larger */}
          <div className="lg:col-span-6 relative flex justify-center mt-8 lg:mt-0">
            
            {/* Mobile View Product Image Card */}
            <div className="block sm:hidden w-full max-w-[300px] bg-neutral-50 border border-neutral-200/80 rounded-3xl p-5 shadow-sm text-center">
              <div className="relative w-full aspect-square bg-white rounded-2xl overflow-hidden flex items-center justify-center p-4 mb-4 border border-neutral-100">
                <Image
                  src="/topshape_starterset.png"
                  alt="FitLine TopShape Starter Set"
                  width={240}
                  height={240}
                  priority
                  className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.05)]"
                />
              </div>
              <span className="inline-block text-[10px] bg-brand-teal text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Ajánlott Csomag
              </span>
              <h3 className="font-bold text-lg text-brand-slate">TopShape Starter Set</h3>
              <p className="text-xs text-neutral-500 font-light mt-1">Az egészséges testsúly eléréséhez</p>
            </div>

            {/* Desktop View Collage - Made larger (max-w-[480px]) */}
            <div className="hidden sm:block relative w-full max-w-[480px] aspect-square">
              {/* Premium Background Lifestyle Image (Teaser circle) */}
              <div className="absolute inset-2 rounded-full overflow-hidden border border-neutral-100 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600"
                  alt="Wellness lifestyle"
                  fill
                  sizes="(max-width: 600px) 100vw, 500px"
                  priority
                  className="object-cover opacity-80 scale-105 hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Decorative floating particles */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-brand-teal/10 rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-brand-teal/5 rounded-full blur-2xl opacity-40" />

              {/* Floating Product Card - Styled clean light */}
              <div className="absolute -bottom-2 right-2 sm:-right-2 w-64 bg-white/95 backdrop-blur-md border border-neutral-200/80 rounded-2xl p-4 shadow-xl transition-transform duration-300 hover:-translate-y-2">
                <div className="relative w-full aspect-square bg-neutral-50 rounded-lg overflow-hidden flex items-center justify-center p-2 mb-3 border border-neutral-100">
                  <Image
                    src="/topshape_starterset.png"
                    alt="FitLine TopShape Starter Set"
                    width={220}
                    height={220}
                    priority
                    className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                  />
                </div>
                <div className="text-center">
                  <div className="text-xs text-brand-teal font-bold uppercase tracking-wider">Ajánlott csomag</div>
                  <h3 className="font-bold text-sm text-brand-slate">TopShape Starter Set</h3>
                  <p className="text-[10px] text-neutral-500 font-light mt-1">Az ideális testsúly eléréséhez</p>
                </div>
              </div>

              {/* Small floating tag */}
              <div className="absolute top-12 -left-6 bg-brand-teal text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md border border-white/10">
                🔥 Gyorsabb anyagcsere
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
