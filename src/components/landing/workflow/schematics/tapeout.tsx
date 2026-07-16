import { SchematicFrame, type SchematicProps } from "../schematic-frame";

export function TapeoutSchematic({ isActive, reduced }: SchematicProps) {
  return (
    <SchematicFrame
      label="GDSII · sign-off"
      index={2}
      isActive={isActive}
      reduced={reduced}
    >
      {/* die outline */}
      <rect
        className="draw"
        pathLength={1}
        x="160"
        y="90"
        width="320"
        height="220"
      />

      {/* inner metal layer 1 — slightly inset, full opacity */}
      <rect
        className="draw d2"
        pathLength={1}
        x="188"
        y="116"
        width="264"
        height="168"
        strokeOpacity="1"
      />

      {/* inner metal layer 2 — more inset, reduced opacity */}
      <rect
        className="draw d2"
        pathLength={1}
        x="218"
        y="144"
        width="204"
        height="112"
        strokeOpacity="0.55"
      />

      {/* inner metal layer 3 — deepest, faint */}
      <rect
        className="draw d3"
        pathLength={1}
        x="248"
        y="172"
        width="144"
        height="56"
        strokeOpacity="0.3"
      />

      {/* reticle crosshair — horizontal arm */}
      <path
        className="draw d2"
        pathLength={1}
        d="M290 200 H350"
        strokeOpacity="0.7"
      />
      {/* reticle crosshair — vertical arm */}
      <path
        className="draw d2"
        pathLength={1}
        d="M320 170 V230"
        strokeOpacity="0.7"
      />
      {/* reticle center circle */}
      <circle
        className="draw d3"
        pathLength={1}
        cx="320"
        cy="200"
        r="10"
        strokeOpacity="0.6"
      />

      {/* DRC checkmark — tick path */}
      <path
        className="draw d3"
        pathLength={1}
        d="M502 163 L507 170 L518 157"
        stroke="var(--color-primary)"
        strokeOpacity="0.9"
      />
      {/* DRC label */}
      <text
        x="524"
        y="170"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="var(--color-text-muted)"
        stroke="none"
      >
        DRC
      </text>

      {/* LVS checkmark — tick path */}
      <path
        className="draw d3"
        pathLength={1}
        d="M502 198 L507 205 L518 192"
        stroke="var(--color-primary)"
        strokeOpacity="0.9"
      />
      {/* LVS label */}
      <text
        x="524"
        y="205"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="var(--color-text-muted)"
        stroke="none"
      >
        LVS
      </text>

      {/* faint die boundary tick marks at corners — alignment markers */}
      <path d="M160 90 L148 78" stroke="var(--color-border)" strokeWidth="1" />
      <path d="M480 90 L492 78" stroke="var(--color-border)" strokeWidth="1" />
      <path
        d="M160 310 L148 322"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <path
        d="M480 310 L492 322"
        stroke="var(--color-border)"
        strokeWidth="1"
      />

      {/* bottom spec strip */}
      <text
        x="160"
        y="336"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        letterSpacing="1"
        fill="var(--color-text-muted)"
        stroke="none"
      >
        METAL · POLY · DIFF · VIA
      </text>
    </SchematicFrame>
  );
}
