import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FitLine Súlykontroll & Életmódváltás | Prémium Wellness Megoldások",
  description: "Tapasztalja meg a fenntartható súlycsökkentés élményét a FitLine termékekkel. Német prémium minőség és a szabadalmaztatott NTC® technológia sejtszinten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${outfit.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-slate">
        {children}
      </body>
    </html>
  );
}
