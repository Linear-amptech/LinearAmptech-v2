"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

export type ImageThemeMode = "new" | "old";

type ImageThemeContextValue = {
  mode: ImageThemeMode;
  setMode: (mode: ImageThemeMode) => void;
};

const ImageThemeContext = React.createContext<ImageThemeContextValue | null>(
  null,
);

export function ImageThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setModeState] = React.useState<ImageThemeMode>("new");

  const setMode = React.useCallback((nextMode: ImageThemeMode) => {
    setModeState(nextMode);
  }, []);

  const value = React.useMemo(() => ({ mode, setMode }), [mode, setMode]);

  return (
    <ImageThemeContext.Provider value={value}>
      {children}
    </ImageThemeContext.Provider>
  );
}

export function useImageTheme() {
  const context = React.useContext(ImageThemeContext);

  if (!context) {
    throw new Error("useImageTheme must be used inside ImageThemeProvider");
  }

  return context;
}

export function ImageThemeToggle({
  tone = "light",
  compact = false,
  className,
}: {
  tone?: "light" | "dark";
  compact?: boolean;
  className?: string;
}) {
  const { mode, setMode } = useImageTheme();
  const options = [
    { label: "New", mode: "new" as const, icon: Moon },
    { label: "Old", mode: "old" as const, icon: Sun },
  ];

  return (
    <div
      className={cn(
        " h-10 items-center rounded-full border p-1 transition-colors hidden",
        tone === "dark"
          ? "border-white/20 bg-[#121110]/35"
          : "border-[color:var(--color-border)] bg-[color:var(--color-surface)] shadow-[var(--shadow-card)]",
        className,
      )}
      aria-label="Image theme"
    >
      {options.map(({ label, mode: optionMode, icon: Icon }) => {
        const active = mode === optionMode;

        return (
          <button
            key={optionMode}
            type="button"
            onClick={() => setMode(optionMode)}
            aria-pressed={active}
            className={cn(
              "inline-flex h-8 items-center gap-1.5 rounded-full text-xs font-semibold transition-colors",
              compact ? "px-2 sm:px-3" : "px-3",
              active
                ? "bg-[#EA7317] text-[#1C1917]"
                : tone === "dark"
                  ? "text-white/70 hover:text-white"
                  : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)]",
            )}
          >
            <Icon className="size-3.5" aria-hidden="true" />
            <span className={compact ? "hidden sm:inline" : undefined}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
