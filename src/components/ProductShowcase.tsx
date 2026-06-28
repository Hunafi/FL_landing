import Image from "next/image";

interface Product {
  id: string;
  name: string;
  subName: string;
  description: string;
  imageSrc: string;
  isSvg: boolean;
  benefits: string[];
  tag?: string;
  accentColor: string;
}

const products: Product[] = [
  {
    id: "topshape-starter",
    name: "FitLine TopShape Starter Set",
    subName: "Komplex Életmódváltó Csomag",
    description: "A legnépszerűbb kombináció a látványos és tartós eredményekhez. Tartalmazza a TopShape rostkomplexet és a ProShape All-in-1 shake-eket a teljes átalakulásért.",
    imageSrc: "/topshape_starterset.png",
    isSvg: false,
    benefits: [
      "Komplett napi rendszer a fenntartható súlycsökkentéshez",
      "Magas rost- és fehérjetartalom a tartós teltségérzetért",
      "Maximális tápanyag-felszívódás az NTC® technológiával"
    ],
    tag: "Legnépszerűbb Választás",
    accentColor: "border-brand-gold bg-brand-gold-light/10"
  },
  {
    id: "topshape",
    name: "FitLine TopShape",
    subName: "Prémium Súlykontroll Rostkomplex",
    description: "Speciális rostkomplex glükomannánnal, amely csökkenti az étvágyat, tisztítja a bélrendszert és természetes teltséget biztosít a fogyókúra alatt.",
    imageSrc: "/topshape.png",
    isSvg: false,
    benefits: [
      "Bizonyítottan segíti a súlycsökkentést kalóriaszegény diéta mellett",
      "Csökkenti az étkezések utáni sóvárgást és a nassolási vágyat",
      "Gluténmentes, vegán és könnyen beilleszthető a napi rutinba"
    ],
    tag: "Bestseller",
    accentColor: "border-brand-teal bg-teal-50/20"
  },
  {
    id: "proshape-chocolate",
    name: "FitLine ProShape All-in-1",
    subName: "Prémium Shake - Krémes Csokoládé",
    description: "Teljes értékű étkezést helyettesítő koktél, amely zöld kávébab- és csalánkivonattal pörgeti fel a zsírégetést az izomtömeg megtartása mellett.",
    imageSrc: "/proshape_chocolate.png",
    isSvg: false,
    benefits: [
      "24 kulcsfontosságú vitamin, ásványi anyag és nyomelem",
      "Kiváló minőségű fehérjék az izomzat védelméért",
      "Hihetetlenül krémes, prémium csokoládé ízélmény"
    ],
    accentColor: "border-neutral-200 bg-neutral-50/30"
  },
  {
    id: "proshape-vanilla",
    name: "FitLine ProShape All-in-1",
    subName: "Prémium Shake - Bourbon Vanília",
    description: "Lágy vanília ízű étkezéshelyettesítő shake. Biztosítja az összes szükséges mikrotápanyagot és fehérjét, így helyettesítve a teljes értékű étkezéseket.",
    imageSrc: "/proshape_vanilla.png",
    isSvg: false,
    benefits: [
      "Ideális 1 vagy 2 főétkezés kiváltására naponta",
      "Segít elkerülni az éhségrohamokat és a fáradtságot",
      "Természetes Bourbon vanília aromával készül"
    ],
    accentColor: "border-neutral-200 bg-neutral-50/30"
  },
  {
    id: "herbaslim",
    name: "FitLine Herbaslim Tea",
    subName: "Gyógynövényes Tisztító és Hidratáló Tea",
    description: "Hagyományos gyógynövények (borsmenta, hibiszkusz, édesgyökér) keveréke, amely támogatja a szervezet méregtelenítését és segíti a vízháztartást.",
    imageSrc: "",
    isSvg: true,
    benefits: [
      "Segíti a felesleges víz távozását és a puffadás csökkentését",
      "Finom, frissítő íz cukor és kalóriák nélkül",
      "Támogatja a vesék és a máj méregtelenítő funkcióit"
    ],
    accentColor: "border-emerald-200 bg-emerald-50/20"
  }
];

export default function ProductShowcase() {
  return (
    <section id="termekek" className="py-20 md:py-28 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest">FitLine Súlycsökkentő Megoldások</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-green-dark tracking-tight">
            Válassza ki az Életmódjához Illő Termékeket
          </h3>
          <p className="text-neutral-600 font-light leading-relaxed">
            Minden termékünk a PM-International egyedülálló, szabadalmaztatott NTC® (Nutrient Transport Concept) rendszerével készül a maximális hatás érdekében.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col rounded-3xl border p-6 bg-white shadow-xs hover:shadow-xl transition-all duration-300 relative ${product.accentColor} ${
                product.tag ? "lg:col-span-1 border-2" : "border-neutral-200/80"
              }`}
            >
              {/* Tag for Highlighted Product */}
              {product.tag && (
                <span className="absolute -top-3 left-6 px-4 py-1 rounded-full bg-brand-gold text-white text-[11px] font-bold tracking-wider uppercase shadow-sm">
                  {product.tag}
                </span>
              )}

              {/* Product Image Wrapper */}
              <div className="w-full aspect-square bg-neutral-50 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-4">
                {product.isSvg ? (
                  // Custom Graphic for Herbaslim Tea
                  <div className="flex flex-col items-center justify-center text-emerald-800">
                    <svg className="w-32 h-32 opacity-85" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8C17 5.2 14.8 3 12 3C9.2 3 7 5.2 7 8C7 10.4 8.7 12.4 11 12.9V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18V12.9C15.3 12.4 17 10.4 17 8ZM12 11C10.3 11 9 9.7 9 8C9 6.3 10.3 5 12 5C13.7 5 15 6.3 15 8C15 9.7 13.7 11 12 11ZM2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20H3C2.4 20 2 20.4 2 21Z"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" opacity="0.1"/>
                    </svg>
                    <span className="text-xs font-semibold text-emerald-700 mt-2 uppercase tracking-widest">Gyógynövény Teakeverék</span>
                  </div>
                ) : (
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={320}
                    height={320}
                    loading="lazy"
                    className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                  />
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-2 flex-grow">
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">{product.subName}</h4>
                  <h3 className="text-xl font-bold text-brand-green-dark">{product.name}</h3>
                </div>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Benefits List */}
                <ul className="pt-4 space-y-2 border-t border-neutral-100">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-xs text-neutral-700">
                      <svg className="w-4 h-4 text-brand-teal mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-6 mt-6 border-t border-neutral-100">
                <a
                  href="https://www.fitline.com/?sponsor=21828601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-bold rounded-full text-white bg-brand-green-dark hover:bg-brand-green-light shadow-sm transition-all duration-200"
                >
                  Rendelés a Hivatalos Shopban
                  <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
