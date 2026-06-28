"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glassmorphism shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-brand-green-dark">
                FitLine<span className="text-brand-orange">®</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold leading-none">
                Független Partner
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a
              href="#termekek"
              className="text-sm font-medium text-brand-slate/85 hover:text-brand-green-light transition-colors"
            >
              Termékek
            </a>
            <a
              href="#elonyök"
              className="text-sm font-medium text-brand-slate/85 hover:text-brand-green-light transition-colors"
            >
              Miért a FitLine?
            </a>
            <a
              href="#tudomany"
              className="text-sm font-medium text-brand-slate/85 hover:text-brand-green-light transition-colors"
            >
              Tudomány & NTC
            </a>
            <a
              href="#velemenyek"
              className="text-sm font-medium text-brand-slate/85 hover:text-brand-green-light transition-colors"
            >
              Vélemények
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-brand-slate/85 hover:text-brand-green-light transition-colors"
            >
              GYIK
            </a>
          </nav>

          {/* Header CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://www.fitline.com/?sponsor=21828601"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm hover:shadow transition-all duration-200"
            >
              Rendelés a Webáruházban
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-slate hover:text-brand-green-light hover:bg-neutral-100 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Menü megnyitása</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-lg mt-2 mx-4 rounded-2xl">
            <a
              href="#termekek"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-slate hover:bg-neutral-50 hover:text-brand-green-light"
            >
              Termékek
            </a>
            <a
              href="#elonyök"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-slate hover:bg-neutral-50 hover:text-brand-green-light"
            >
              Miért a FitLine?
            </a>
            <a
              href="#tudomany"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-slate hover:bg-neutral-50 hover:text-brand-green-light"
            >
              Tudomány & NTC
            </a>
            <a
              href="#velemenyek"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-slate hover:bg-neutral-50 hover:text-brand-green-light"
            >
              Vélemények
            </a>
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-slate hover:bg-neutral-50 hover:text-brand-green-light"
            >
              GYIK
            </a>
            <div className="pt-4 pb-2 border-t border-neutral-100 px-3">
              <a
                href="https://www.fitline.com/?sponsor=21828601"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-brand-orange hover:bg-brand-orange-hover shadow-sm"
              >
                Rendelés a Webáruházban
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
