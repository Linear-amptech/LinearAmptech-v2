import type { ReactNode } from "react";

export type SchematicProps = { isActive: boolean; reduced: boolean };

type FrameProps = {
  label: string;
  index: number;
  isActive: boolean;
  reduced: boolean;
  children: ReactNode;
};

// Shared blueprint framework. Children draw their own line-art in the 640x400
// coordinate space. Any descendant <path className="draw" pathLength={1} ...>
// animates in via stroke-dashoffset when the stage becomes active.
export function SchematicFrame({
  label,
  index,
  isActive,
  reduced,
  children,
}: FrameProps) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <svg
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      role="img"
      aria-label={`${label} stage schematic`}
      data-active={isActive ? "true" : "false"}
      data-reduced={reduced ? "true" : "false"}
    >
      <defs>
        <pattern
          id="bp-grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M32 0H0V32"
            fill="none"
            stroke="#0b1220"
            strokeOpacity="0.05"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      {/* canvas */}
      <rect x="0" y="0" width="640" height="400" fill="#ffffff" />
      <rect x="0" y="0" width="640" height="400" fill="url(#bp-grid)" />

      {/* corner reticle ticks */}
      <g stroke="#64748b" strokeWidth="1.25" strokeOpacity="0.6" fill="none">
        <path d="M20 36V20H36" />
        <path d="M604 20H620V36" />
        <path d="M20 364V380H36" />
        <path d="M604 380H620V364" />
      </g>

      {/* ghosted stage number watermark */}
      <text
        x="612"
        y="320"
        textAnchor="end"
        fontFamily="var(--font-app-heading)"
        fontSize="150"
        fontWeight="700"
        fill="#0b1220"
        fillOpacity="0.04"
      >
        {num}
      </text>

      {/* line-art */}
      <g
        className="bp-art"
        data-draw={isActive && !reduced ? "on" : "off"}
        stroke="#0b1220"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>

      {/* bottom-left mono label */}
      <text
        x="28"
        y="372"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        letterSpacing="2"
        fill="#64748b"
      >
        {label.toUpperCase()}
      </text>
    </svg>
  );
}
