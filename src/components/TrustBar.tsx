export default function TrustBar() {
  return (
    <div className="bg-white dark:bg-brand-green-mid border-y border-neutral-200 dark:border-neutral-800 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center text-center">
          
          {/* Made in Germany */}
          <div className="flex flex-col items-center space-y-2 group">
            <div className="w-12 h-12 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center border border-neutral-100 dark:border-neutral-700 group-hover:bg-brand-gold-light/40 dark:group-hover:bg-brand-teal/20 transition-colors duration-300">
              <svg className="w-6 h-6 text-brand-green-mid dark:text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-slate leading-tight">Made in Germany</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Szigorú prémium minőségellenőrzés</p>
            </div>
          </div>

          {/* Cologne List */}
          <div className="flex flex-col items-center space-y-2 group">
            <div className="w-12 h-12 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center border border-neutral-100 dark:border-neutral-700 group-hover:bg-brand-gold-light/40 dark:group-hover:bg-brand-teal/20 transition-colors duration-300">
              <svg className="w-6 h-6 text-brand-green-mid dark:text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0h1s3.38-1.08 5 0c1.45.97 2 4 2 4h-5M9 21h6m-6-3h6m-5-3h4" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-slate leading-tight">Kölni Lista® Garancia</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Doppingmentes és bevizsgált</p>
            </div>
          </div>

          {/* GMP Standard */}
          <div className="flex flex-col items-center space-y-2 group">
            <div className="w-12 h-12 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center border border-neutral-100 dark:border-neutral-700 group-hover:bg-brand-gold-light/40 dark:group-hover:bg-brand-teal/20 transition-colors duration-300">
              <svg className="w-6 h-6 text-brand-green-mid dark:text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-slate leading-tight">GMP Gyógyszerészeti Minőség</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Legmagasabb tisztasági szint</p>
            </div>
          </div>

          {/* NTC Patent */}
          <div className="flex flex-col items-center space-y-2 group">
            <div className="w-12 h-12 rounded-full bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center border border-neutral-100 dark:border-neutral-700 group-hover:bg-brand-gold-light/40 dark:group-hover:bg-brand-teal/20 transition-colors duration-300">
              <svg className="w-6 h-6 text-brand-green-mid dark:text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-slate leading-tight">Szabadalmaztatott NTC®</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Maximális biohasznosulás sejtszinten</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
