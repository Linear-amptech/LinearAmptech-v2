import { SchematicFrame, type SchematicProps } from "../schematic-frame";

export function SimulationSchematic({ isActive, reduced }: SchematicProps) {
  return (
    <SchematicFrame
      label="S-parameters · EM co-sim"
      index={1}
      isActive={isActive}
      reduced={reduced}
    >
      {/* plot axes */}
      <path className="draw" pathLength={1} d="M80 92V300H430" />
      {/* faint horizontal gridlines */}
      <path d="M80 160H430M80 230H430" stroke="#0b1220" strokeOpacity="0.08" />
      {/* S21 bandpass response */}
      <path
        className="draw d2"
        pathLength={1}
        d="M88 286 C 140 286, 150 150, 215 145 C 255 142, 286 142, 320 147 C 382 154, 396 276, 424 289"
      />
      {/* axis labels */}
      <text
        x="58"
        y="100"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#64748b"
        stroke="none"
      >
        dB
      </text>
      <text
        x="408"
        y="320"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#64748b"
        stroke="none"
      >
        FREQ
      </text>
      <text
        x="150"
        y="128"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#0b1220"
        stroke="none"
      >
        S21
      </text>
      {/* simplified Smith chart */}
      <circle className="draw d3" pathLength={1} cx="522" cy="160" r="70" />
      <path className="draw d3" pathLength={1} d="M452 160H592" />
      <circle className="draw d3" pathLength={1} cx="557" cy="160" r="35" />
      <text
        x="492"
        y="74"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        letterSpacing="1"
        fill="#64748b"
        stroke="none"
      >
        SMITH
      </text>
    </SchematicFrame>
  );
}
