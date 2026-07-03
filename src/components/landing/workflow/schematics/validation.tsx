import { SchematicFrame, type SchematicProps } from "../schematic-frame";

export function ValidationSchematic({ isActive, reduced }: SchematicProps) {
  // Row y-positions
  const rows = [
    { y: 115, label: "GAIN", barW: 230 },
    { y: 165, label: "NF", barW: 195 },
    { y: 215, label: "P1dB", barW: 218 },
    { y: 260, label: "EVM", barW: 205 },
  ];

  const trackX = 170;
  const trackEnd = 430;
  const targetX = 390;
  const checkX = 450;

  // Stagger classes for draw animation
  const staggerClass = ["draw", "draw d2", "draw d3", "draw d2"];

  return (
    <SchematicFrame
      label="Spec compliance"
      index={6}
      isActive={isActive}
      reduced={reduced}
    >
      {/* Column header labels */}
      <text
        x={trackX + 30}
        y="90"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#78716C"
        stroke="none"
        letterSpacing="1"
      >
        MEASURED
      </text>
      <text
        x={targetX - 14}
        y="90"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#78716C"
        stroke="none"
        letterSpacing="1"
      >
        SPEC
      </text>

      {rows.map((row, i) => (
        <g key={row.label}>
          {/* Row label */}
          <text
            x="80"
            y={row.y + 4}
            fontFamily="var(--font-app-mono)"
            fontSize="12"
            fill="#1C1917"
            stroke="none"
          >
            {row.label}
          </text>

          {/* Faint full-width baseline track */}
          <line
            x1={trackX}
            y1={row.y}
            x2={trackEnd}
            y2={row.y}
            stroke="#E7E0D5"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Measured bar — animates in */}
          <line
            className={staggerClass[i]}
            pathLength={1}
            x1={trackX}
            y1={row.y}
            x2={trackX + row.barW}
            y2={row.y}
            stroke="#EA7317"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Target tick mark */}
          <line
            x1={targetX}
            y1={row.y - 10}
            x2={targetX}
            y2={row.y + 10}
            stroke="#78716C"
            strokeWidth="1.5"
          />

          {/* Checkmark at row end */}
          <path
            d={`M${checkX} ${row.y} l5 6 l10 -10`}
            stroke="#EA7317"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      ))}

      {/* Divider line below column headers */}
      <line x1="70" y1="98" x2="475" y2="98" stroke="#E7E0D5" strokeWidth="1" />

      {/* PASS stamp — rotated rectangle + text */}
      <g transform="rotate(-12 510 300)">
        <rect
          x="468"
          y="275"
          width="84"
          height="40"
          rx="4"
          ry="4"
          stroke="#EA7317"
          strokeWidth="2"
          fill="none"
        />
        {/* Double border for stamp feel */}
        <rect
          x="472"
          y="279"
          width="76"
          height="32"
          rx="2"
          ry="2"
          stroke="#EA7317"
          strokeOpacity="0.3"
          strokeWidth="1"
          fill="none"
        />
        <text
          x="510"
          y="301"
          textAnchor="middle"
          fontFamily="var(--font-app-mono)"
          fontSize="18"
          fontWeight="700"
          fill="#C2410C"
          stroke="none"
          letterSpacing="4"
        >
          PASS
        </text>
      </g>
    </SchematicFrame>
  );
}
