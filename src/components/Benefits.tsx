export default function Benefits() {
  const benefitList = [
    {
      title: "Fenntartható Súlykontroll",
      description: "Nincs jojó-effektus. A FitLine termékek nem a vízveszteséget célozzák, hanem a tartós zsírcsökkentést az izomtömeg megőrzése mellett.",
      icon: (
        <svg className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
        </svg>
      )
    },
    {
      title: "Természetes Étvágykontroll",
      description: "A TopShape speciális élelmi rostjai a gyomorban megduzzadnak, így hosszan tartó jóllakottságérzetet adnak és csökkentik a sóvárgást.",
      icon: (
        <svg className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Energia és Vitalitás",
      description: "Súlycsökkentés fáradtság nélkül. A tápanyagok biztosítják, hogy az energiaszintje magas maradjon a diéta alatt is.",
      icon: (
        <svg className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Sejtszintű NTC® Felszívódás",
      description: "A szabadalmaztatott Tápanyag-szállítási Koncepció (NTC®) a tápanyagokat közvetlenül a sejtekhez juttatja, ott fejtve ki hatásukat, ahol kell.",
      icon: (
        <svg className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Emésztés és Bélflóra Támogatás",
      description: "A minőségi rostok és növényi kivonatok támogatják az egészséges bélflórát, ami kulcsfontosságú az optimális zsírégetésben.",
      icon: (
        <svg className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Biztonságos & Doppingmentes",
      description: "Minden FitLine terméket független laboratóriumok vizsgálnak, és szerepelnek a Kölni Listán. Ideális profi és amatőr sportolóknak is.",
      icon: (
        <svg className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="elonyök" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest">Tudatos Életmódváltás</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-slate tracking-tight">
            A FitLine Különbség: Miért Minket Válasszon?
          </h3>
          <p className="text-neutral-500 font-light leading-relaxed">
            Nemcsak a kilókat csökkentjük, hanem támogatjuk a test teljes egyensúlyát, hogy Ön a legjobb formájában érezze magát.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitList.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col bg-brand-cream border border-neutral-100 rounded-3xl p-8 hover:bg-white hover:border-brand-teal/20 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center shadow-xs group-hover:bg-brand-teal group-hover:border-transparent transition-all duration-300 shrink-0">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-slate mt-6 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed flex-grow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
