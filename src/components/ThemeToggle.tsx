"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark" | "system") || "system";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    // Standard 2-state toggle cycle:
    // If it is light mode (or system resolves to light), we switch to dark.
    // If it is dark mode (or system resolves to dark), we switch to light.
    // This provides a simpler, cleaner user experience than a 3-way toggle.
    let isCurrentlyDark = false;
    if (theme === "system") {
      isCurrentlyDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
      isCurrentlyDark = theme === "dark";
    }

    const newTheme = isCurrentlyDark ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  };

  // Listen to system theme changes if set to system
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.add("dark");
        document.documentElement.style.colorScheme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.colorScheme = "light";
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  if (!mounted) {
    // Return a skeleton matching the size and layout of the switch to avoid layout shifts during hydration
    return (
      <div className="w-14 h-7 bg-neutral-100 dark:bg-brand-green-light rounded-full border border-neutral-200 dark:border-transparent opacity-50 shrink-0" />
    );
  }

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-neutral-200 dark:bg-brand-green-light transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-brand-green-dark"
      role="switch"
      aria-checked={isDark}
      aria-label="Sötét/Világos mód váltása"
    >
      <span className="sr-only">Sötét mód váltása</span>

      {/* Sun/Moon icons inside the track background */}
      <span className="absolute inset-0 flex items-center justify-between px-1.5 pointer-events-none select-none">
        {/* Sun Icon (light mode) */}
        <svg
          className={`w-3.5 h-3.5 transition-all duration-300 ${
            isDark ? "text-neutral-500 opacity-40 scale-75" : "text-brand-orange opacity-100 scale-100"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464-6.364a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm.707 9.9a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464a1 1 0 10-1.414-1.414l-.707.707a1 1 0 101.414 1.414l.707-.707zm1.414 8.486a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM4 10a1 1 0 100-2H3a1 1 0 100 2h1z"
            clipRule="evenodd"
          />
        </svg>
        {/* Moon Icon (dark mode) */}
        <svg
          className={`w-3.5 h-3.5 transition-all duration-300 ${
            isDark ? "text-brand-emerald opacity-100 scale-100" : "text-neutral-400 opacity-40 scale-75"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </span>

      {/* Sliding Toggle Thumb */}
      <span
        className={`${
          isDark ? "translate-x-7 bg-brand-orange" : "translate-x-0 bg-white"
        } pointer-events-none inline-block h-5 w-5 transform rounded-full shadow-md ring-0 transition duration-300 ease-in-out mt-[2px] ml-[2px]`}
      />
    </button>
  );
}
