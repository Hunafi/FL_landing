export default function FinalCta() {
  return (
    <section className="py-20 md:py-24 bg-white dark:bg-brand-green-dark text-brand-slate dark:text-neutral-100 relative overflow-hidden border-t border-neutral-100 dark:border-neutral-850">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.03),transparent_70%)]" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest">Kezdje el még ma</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-brand-slate dark:text-neutral-100">
            Készen áll arra, hogy elérje a legjobb formáját?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 font-light text-lg md:text-xl leading-relaxed">
            Csatlakozzon több millió elégedett FitLine fogyasztóhoz világszerte. Kezdje el a súlycsökkentő programot teljesen kockázatmentesen a 30 napos elégedettségi garanciával!
          </p>
        </div>

        {/* Primary CTA button with animation pop */}
        <div className="pt-4">
          <a
            href="https://www.fitline.com/hu/hu-hu/products?sponsor=21828601&category=weightmanagement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-base font-extrabold rounded-full text-white bg-brand-orange hover:bg-brand-orange-hover shadow-xl hover:shadow-brand-orange/35 scale-100 hover:scale-102 transition-all duration-200"
          >
            Súlykontroll Termékek Megrendelése
            <svg className="w-5 h-5 ml-2.5 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Trust Badges under CTA */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-10 border-t border-neutral-100 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
          
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-left">30 napos pénzvisszafizetési garancia</span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-left">100% biztonságos vásárlás</span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3">
            <svg className="w-5 h-5 text-brand-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-left">Gyors szállítás közvetlenül a raktárból</span>
          </div>

        </div>

      </div>
    </section>
  );
}
