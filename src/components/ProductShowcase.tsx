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
      "Természetes módon glutén- és laktózmentes összetevők"
    ],
    tag: "Legnépszerűbb Választás",
    accentColor: "border-brand-teal dark:border-brand-teal bg-brand-teal/[0.02] dark:bg-brand-teal/[0.05]"
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
      "Glutén- és laktózmentes, vegán összetétel"
    ],
    tag: "Bestseller",
    accentColor: "border-neutral-200 dark:border-neutral-850 bg-neutral-50/30 dark:bg-neutral-800/30"
  },
  {
    id: "proshape-chocolate",
    name: "FitLine ProShape All-in-1",
    subName: "Shake - Krémes Csokoládé",
    description: "Teljes értékű étkezést helyettesítő koktél, amely zöld kávébab- és csalánkivonattal pörgeti fel a zsírégetést az izomtömeg megtartása mellett.",
    imageSrc: "/proshape_chocolate.png",
    isSvg: false,
    benefits: [
      "24 kulcsfontosságú vitamin, ásványi anyag és nyomelem",
      "Kiváló minőségű fehérjék az izomzat védelméért",
      "Krémes csokoládé íz, glutén- és laktózmentes receptúra"
    ],
    accentColor: "border-neutral-200 dark:border-neutral-850 bg-neutral-50/30 dark:bg-neutral-800/30"
  },
  {
    id: "proshape-vanilla",
    name: "FitLine ProShape All-in-1",
    subName: "Shake - Bourbon Vanília",
    description: "Lágy vanília ízű étkezéshelyettesítő shake. Biztosítja az összes szükséges mikrotápanyagot és fehérjét, így helyettesítve a teljes értékű étkezéseket.",
    imageSrc: "/proshape_vanilla.png",
    isSvg: false,
    benefits: [
      "Ideális 1 vagy 2 főétkezés kiváltására naponta",
      "Segít elkerülni az éhségrohamokat és a fáradtságot",
      "Természetes Bourbon vanília íz, glutén- és laktózmentes"
    ],
    accentColor: "border-neutral-200 dark:border-neutral-850 bg-neutral-50/30 dark:bg-neutral-800/30"
  }
];

export default function ProductShowcase() {
  return (
    <section id="termekek" className="py-20 md:py-28 bg-white dark:bg-brand-green-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-brand-teal uppercase tracking-widest">FitLine Súlycsökkentő Megoldások</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-slate dark:text-neutral-100 tracking-tight">
            Válassza ki az Életmódjához Illő Termékeket
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 font-light leading-relaxed text-base md:text-lg">
            Minden termékünk a PM-International egyedülálló, szabadalmaztatott NTC® (Nutrient Transport Concept) rendszerével készül a maximális hatás érdekében. Prémium termékeink természetes módon <strong>laktózmentesek és gluténmentesek</strong>, így az ételérzékenységgel küzdők is bátran fogyaszthatják őket.
          </p>
        </div>

        {/* Product Cards Grid - Adjusted to max-w-5xl and 2 columns for a balanced 4-product design */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 items-stretch">
          {products.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col rounded-3xl border p-6 bg-white dark:bg-brand-green-mid shadow-xs hover:shadow-xl transition-all duration-300 relative ${product.accentColor} ${
                product.tag ? "border-brand-teal/80 dark:border-brand-teal border-2" : "border-neutral-200/80 dark:border-neutral-800"
              }`}
            >
              {/* Tag for Highlighted Product */}
              {product.tag && (
                <span className="absolute -top-3 left-6 px-4 py-1 rounded-full bg-brand-teal text-white text-[10px] font-bold tracking-wider uppercase shadow-sm">
                  {product.tag}
                </span>
              )}

              {/* Product Image Wrapper */}
              <div className="w-full aspect-square bg-white dark:bg-neutral-800 border border-neutral-100/60 dark:border-neutral-700/65 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  width={380}
                  height={380}
                  loading="lazy"
                  className="max-w-full h-auto object-contain max-h-[320px] hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Description - Slightly bigger font */}
              <div className="space-y-2 flex-grow">
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">{product.subName}</h4>
                  <h3 className="text-xl font-bold text-brand-slate dark:text-neutral-100">{product.name}</h3>
                </div>
                <p className="text-base text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Benefits List - Slightly bigger font */}
                <ul className="pt-4 space-y-2 border-t border-neutral-100 dark:border-neutral-800">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm text-neutral-700 dark:text-neutral-300">
                      <svg className="w-4 h-4 text-brand-teal mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800">
                <a
                  href="https://www.fitline.com/hu/hu-hu/products?sponsor=21828601&category=weightmanagement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-bold rounded-full text-white bg-brand-orange hover:bg-brand-orange-hover shadow-xs transition-all duration-200"
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
