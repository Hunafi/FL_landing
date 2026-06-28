export default function Footer() {
  return (
    <footer className="bg-brand-slate text-neutral-400 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">
                FitLine<span className="text-brand-orange">®</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold leading-none mt-1">
                Független Partner Weboldal
              </span>
            </div>
            <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-sm">
              Ez a weboldal egy független FitLine forgalmazó/partner által üzemeltetett ajánlói oldal, nem a PM-International AG hivatalos vállalati oldala. A vásárlások a hivatalos FitLine áruházban történnek biztonságos fizetéssel és központi szállítással.
            </p>
            <div className="text-xs text-brand-gold font-semibold">
              Ajánló (Sponsor ID): 21828601
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigáció</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#termekek" className="hover:text-white transition-colors">Termékek</a>
              </li>
              <li>
                <a href="#elonyök" className="hover:text-white transition-colors">Miért a FitLine?</a>
              </li>
              <li>
                <a href="#tudomany" className="hover:text-white transition-colors">Tudomány & NTC®</a>
              </li>
              <li>
                <a href="#velemenyek" className="hover:text-white transition-colors">Vélemények</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Gyakran Ismételt Kérdések</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact/Disclaimer */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Hivatalos Vásárlás</h4>
            <p className="text-xs text-neutral-500 font-light leading-relaxed">
              Minden megrendelést a PM-International AG szolgál ki közvetlenül a hivatalos elosztó központokból. Az árak és az elégedettségi garancia megegyezik a hivatalos vásárlói feltételekkel.
            </p>
            <div className="pt-2">
              <a
                href="https://www.fitline.com/?sponsor=21828601"
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
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center space-y-4">
          <p className="text-[10px] text-neutral-600 font-light leading-relaxed max-w-4xl mx-auto">
            <strong>Egészségügyi nyilatkozat:</strong> A termékek étrend-kiegészítők, nem minősülnek gyógyszernek, és nem alkalmasak betegségek megelőzésére, diagnosztizálására, kezelésére vagy gyógyítására. Az étrend-kiegészítők nem helyettesítik a kiegyensúlyozott, vegyes étrendet és az egészséges életmódot. Az elért testsúlycsökkentési eredmények egyénenként eltérhetnek a személyes anyagcsere, fizikai aktivitás és étrendi fegyelem függvényében.
          </p>
          <p className="text-[10px] text-neutral-500 font-light">
            © {new Date().getFullYear()} FitLine Független Partner. Minden jog fenntartva. PM-International, FitLine, NTC logók és védjegyek a PM-International AG bejegyzett tulajdonát képezik.
          </p>
        </div>
      </div>
    </footer>
  );
}
