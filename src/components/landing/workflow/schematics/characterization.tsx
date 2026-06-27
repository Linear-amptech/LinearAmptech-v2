import { SchematicFrame, type SchematicProps } from "../schematic-frame";

export function CharacterizationSchematic({
  isActive,
  reduced,
}: SchematicProps) {
  // Plot origin: (95, 300). Y-axis up to y≈95. X-axis right to x≈540.
  // S21 gain curve: gently rolling off from left to right across the band.
  // S11 return-loss curve: lower in the plot, with a clear dip/notch.
  // Scan cursor at x≈300 (dashed vertical line).

  return (
    <SchematicFrame
      label="Measured · S-param"
      index={5}
      isActive={isActive}
      reduced={reduced}
    >
      {/* Plot axes (L-shape): y-axis and x-axis */}
      <path className="draw" pathLength={1} d="M95 95V300H540" />

      {/* Faint horizontal gridlines */}
      <path
        d="M95 148H540M95 200H540M95 252H540"
        stroke="#0b1220"
        strokeOpacity="0.08"
      />

      {/* S21 gain curve — gentle roll-off descending left to right */}
      <path
        className="draw d2"
        pathLength={1}
        d="M105 120 C 160 118, 210 128, 260 142 C 300 153, 340 168, 390 185 C 440 202, 490 218, 530 230"
      />

      {/* S11 return-loss curve — lower in plot with a clear dip/notch around x=300 */}
      <path
        className="draw d3"
        pathLength={1}
        d="M105 260 C 150 258, 210 255, 255 252 C 275 250, 290 232, 300 218 C 310 232, 322 250, 345 253 C 400 258, 460 260, 530 262"
      />

      {/* Vertical dashed scan cursor at x≈300 */}
      <line
        x1="300"
        y1="95"
        x2="300"
        y2="300"
        stroke="#64748b"
        strokeWidth="1"
        strokeDasharray="4 4"
      />

      {/* Axis label: dB near top of y-axis */}
      <text
        x="72"
        y="103"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#64748b"
        stroke="none"
      >
        dB
      </text>

      {/* Axis label: FREQ near right of x-axis */}
      <text
        x="510"
        y="320"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#64748b"
        stroke="none"
      >
        FREQ
      </text>

      {/* Curve label: S21 near the gain curve (upper area) */}
      <text
        x="130"
        y="112"
        fontFamily="var(--font-app-mono)"
        fontSize="12"
        fill="#0b1220"
        stroke="none"
      >
        S21
      </text>

      {/* Curve label: S11 near the return-loss curve (lower area) */}
      <text
        x="108"
        y="278"
        fontFamily="var(--font-app-mono)"
        fontSize="12"
        fill="#0b1220"
        stroke="none"
      >
        S11
      </text>

      {/* Scan cursor readout label */}
      <text
        x="306"
        y="108"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#64748b"
        stroke="none"
      >
        MKR
      </text>
    </SchematicFrame>
  );
}
