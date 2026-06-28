export default function Testimonials() {
  const reviews = [
    {
      name: "Szabó Katalin",
      age: "42 éves, Budapest",
      quote: "A ProShape shake-ekkel végre sikerült koplalás nélkül elérnem a célsúlyomat, miközben az energiaszintem is magas maradt. A csokoládés shake kifejezetten finom, olyan mintha egy prémium desszertet ennék, de bűntudat nélkül!",
      product: "TopShape Starter Set",
      result: "korábbi karcsúbb alkat",
      avatarBg: "bg-rose-100 text-rose-800"
    },
    {
      name: "Kovács Péter",
      age: "38 éves, Győr",
      quote: "Mindig gondot okozott a délutáni fáradtság és a folyamatos nassolási vágy az irodában. A TopShape rostok ebéd előtt eltelítenek és kellemes teltségérzetet adnak. Végre nem vágyom a cukorra és a nassolásra délután 3-kor!",
      product: "FitLine TopShape",
      result: "Megszűnt sóvárgás & laposabb has",
      avatarBg: "bg-neutral-100 text-neutral-800"
    },
    {
      name: "Németh Andrea",
      age: "55 éves, Debrecen",
      quote: "Nem csak a centik csökkenésében segített: a közérzetem és a bőröm is látványosan javult. A bélrendszerem végre könnyedén működik, nincs az a nehéz, levert érzésem étkezések után. Mindenkinek csak ajánlani tudom!",
      product: "ProShape All-in-1 Vanília",
      result: "Könnyed emésztés & tónusos test",
      avatarBg: "bg-brand-gold-light text-brand-gold"
    }
  ];

  return (
    <section id="velemenyek" className="py-20 md:py-28 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest">Valós Tapasztalatok</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-slate tracking-tight">
            Akik Már Elindultak a Változás Útján
          </h3>
          <p className="text-neutral-500 font-light leading-relaxed text-base md:text-lg">
            Olvassa el azoknak a véleményét, akik a FitLine prémium termékeit választották a fenntartható életmódváltás és súlykontroll eléréséhez.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-neutral-200/80 rounded-3xl p-8 shadow-xs hover:shadow-md transition-all duration-300 relative justify-between"
            >
              <div className="space-y-6">
                {/* Stars */}
                <div className="flex gap-1 text-brand-teal">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote - Slightly larger font */}
                <p className="text-neutral-700 italic font-light leading-relaxed text-base">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author & Results Footer */}
              <div className="pt-6 mt-6 border-t border-neutral-100 space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${review.avatarBg}`}>
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-slate text-sm">{review.name}</h4>
                    <p className="text-xs text-neutral-500">{review.age}</p>
                  </div>
                </div>
                
                {/* Result highlight badge */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-teal/5 border border-brand-teal/10 text-brand-teal">
                    🎯 Eredmény: {review.result}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-light bg-neutral-50 border border-neutral-200 text-neutral-600">
                    📦 Használt termék: {review.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer note */}
        <div className="mt-12 text-center">
          <p className="text-[11px] text-neutral-400 font-light max-w-2xl mx-auto">
            *Megjegyzés: Az elért eredmények egyénenként változhatnak, és megfelelő kalóriaszegény táplálkozás, valamint rendszeres testmozgás mellett valósulnak meg. A FitLine termékek nem alkalmasak betegségek diagnosztizálására vagy kezelésére.
          </p>
        </div>

      </div>
    </section>
  );
}
