export default function Science() {
  return (
    <section id="tudomany" className="py-20 md:py-28 bg-brand-green-dark text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.15),transparent_50%)]" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Scientific Text Content (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-brand-gold-light text-xs font-semibold uppercase tracking-wider">
              🔬 Tudományos Innováció
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              A szabadalmaztatott NTC® Koncepció:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-emerald-400 to-amber-300">
                Tápanyagszállítás közvetlenül a sejtekbe
              </span>
            </h2>
            
            <p className="text-neutral-300 font-light leading-relaxed">
              A FitLine termékek kiemelkedő hatékonyságának titka a szabadalmaztatott <strong>Tápanyag-szállítási Koncepció (NTC®)</strong>. Ez a technológia biztosítja, hogy a vitaminok, ásványi anyagok és zsírégető rostok pontosan oda kerüljenek, ahol és amikor szükség van rájuk – sejtszinten.
            </p>

            <div className="space-y-4 pt-4">
              {/* Point 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-teal mr-4">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Rendkívül gyors felszívódás</h4>
                  <p className="text-sm text-neutral-400 font-light mt-0.5">
                    A folyékony formulák és a micellás technológia révén a tápanyagok percek alatt elérik a véráramot a gyomor megterhelése nélkül.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-teal mr-4">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Magasabb biohasznosulás</h4>
                  <p className="text-sm text-neutral-400 font-light mt-0.5">
                    Míg a hagyományos tabletták hatóanyagainak nagy része kiürül, a FitLine technológiája szinte teljes felszívódást biztosít.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal/20 border border-brand-teal/30 flex items-center justify-center text-brand-teal mr-4">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Szigorú tudományos háttér</h4>
                  <p className="text-sm text-neutral-400 font-light mt-0.5">
                    Több mint 30 év kutatás, nemzetközi szabadalmak és orvosokból, táplálkozáskutatókból álló tudományos testület garantálja a hatást.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scientific Visual Panel (Right) */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
              
              {/* Graphic circle representation */}
              <div className="relative flex justify-center mb-8">
                <div className="w-48 h-48 rounded-full border border-dashed border-brand-teal/40 flex items-center justify-center animate-spin-slow">
                  <div className="w-36 h-36 rounded-full border border-brand-teal/30 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-brand-teal/10 flex items-center justify-center border border-brand-teal/50">
                      <span className="text-2xl font-black text-brand-teal tracking-tighter">NTC®</span>
                    </div>
                  </div>
                </div>

                {/* Floating nutrient particles */}
                <div className="absolute top-8 left-12 w-3 h-3 bg-brand-gold rounded-full animate-ping" />
                <div className="absolute bottom-6 right-16 w-2 h-2 bg-brand-teal rounded-full animate-bounce" />
                <div className="absolute top-1/2 right-6 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-pulse" />
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-lg font-bold text-white">Tudományosan Igazolt Eredmények</h3>
                <p className="text-xs text-neutral-400 font-light">
                  A PM-International együttműködik a Luxemburgi Tudományos és Technológiai Intézettel (LIST) a tápanyag-felszívódás folyamatos tökéletesítéséért.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="text-left">
                    <div className="text-2xl font-bold text-brand-gold">70+</div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-0.5">Szabadalom</div>
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-brand-gold">3M+</div>
                    <div className="text-[10px] text-neutral-400 uppercase tracking-widest mt-0.5">Elégedett Ügyfél</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
