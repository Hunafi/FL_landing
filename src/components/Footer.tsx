export default function Footer() {
  return (
    <footer className="bg-neutral-50 text-neutral-600 py-16 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-brand-slate">
                FitLine<span className="text-brand-orange">®</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold leading-none mt-1">
                Független Partner Weboldal
              </span>
            </div>
            
            <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-sm">
              Ez a weboldal egy független FitLine forgalmazó/partner által üzemeltetett ajánlói oldal, nem a PM-International AG hivatalos vállalati oldala. A vásárlások a hivatalos FitLine áruházban történnek biztonságos fizetéssel és központi szállítással.
            </p>

            {/* Social Icons Section */}
            <div className="flex items-center space-x-4 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-brand-teal hover:border-brand-teal/30 shadow-xs transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-brand-teal hover:border-brand-teal/30 shadow-xs transition-all duration-200"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.95.83 2.15 1.34 3.4 1.45v3.7c-1.37-.03-2.7-.42-3.85-1.18-.32-.23-.62-.49-.89-.78-.04 1.8-.02 3.6-.03 5.4-.04 2.87-.7 5.79-2.73 7.82-1.92 2.05-4.87 2.84-7.6 2.45-3.08-.34-5.91-2.48-7.07-5.4-1.35-3.23-.42-7.29 2.22-9.43 1.83-1.53 4.28-2.14 6.64-1.74v3.83c-1.25-.32-2.61-.07-3.66.72-1.22.9-1.64 2.67-1.07 4.1.53 1.42 2.14 2.37 3.66 2.19 1.63-.1 3.02-1.4 3.12-3.05.05-1.94.02-3.88.03-5.82V.02h-.17z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-brand-teal hover:border-brand-teal/30 shadow-xs transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.517 0-9.388.553a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-brand-slate uppercase tracking-wider">Navigáció</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#termekek" className="hover:text-brand-teal transition-colors">Termékek</a>
              </li>
              <li>
                <a href="#elonyök" className="hover:text-brand-teal transition-colors">Miért a FitLine?</a>
              </li>
              <li>
                <a href="#tudomany" className="hover:text-brand-teal transition-colors">Tudomány & NTC®</a>
              </li>
              <li>
                <a href="#velemenyek" className="hover:text-brand-teal transition-colors">Vélemények</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-teal transition-colors">Gyakran Ismételt Kérdések</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact/Disclaimer */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-brand-slate uppercase tracking-wider">Hivatalos Vásárlás</h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Minden megrendelést a PM-International AG szolgál ki közvetlenül a hivatalos elosztó központokból. Az árak és az elégedettségi garancia megegyezik a hivatalos vásárlói feltételekkel.
            </p>
            <div className="pt-2">
              <a
                href="https://www.fitline.com/hu/hu-hu/products?sponsor=21828601&category=weightmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-xs font-bold rounded-full text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm transition-all duration-200"
              >
                Ugrás a FitLine Webáruházba
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimers & Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-200 text-center space-y-4">
          <p className="text-[10px] text-neutral-500 font-light leading-relaxed max-w-4xl mx-auto">
            <strong>Egészségügyi nyilatkozat:</strong> A termékek étrend-kiegészítők, nem minősülnek gyógyszernek, és nem alkalmasak betegségek megelőzésére, diagnosztizálására, kezelésére vagy gyógyítására. Az étrend-kiegészítők nem helyettesítik a kiegyensúlyozott, vegyes étrendet és az egészséges életmódot. Az elért testsúlycsúlycsökkentési eredmények egyénenként eltérhetnek a személyes anyagcsere, fizikai aktivitás és étrendi fegyelem függvényében.
          </p>
          <p className="text-[10px] text-neutral-400 font-light">
            © {new Date().getFullYear()} FitLine Független Partner. Minden jog fenntartva. PM-International, FitLine, NTC logók és védjegyek a PM-International AG bejegyzett tulajdonát képezik.
          </p>
        </div>
      </div>
    </footer>
  );
}
