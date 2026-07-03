import { SchematicFrame, type SchematicProps } from "../schematic-frame";

export function PackagingSchematic({ isActive, reduced }: SchematicProps) {
  return (
    <SchematicFrame
      label="Die · package"
      index={3}
      isActive={isActive}
      reduced={reduced}
    >
      {/* ── substrate bar ── */}
      <rect
        className="draw"
        pathLength={1}
        x="140"
        y="212"
        width="360"
        height="36"
      />
      <text
        x="280"
        y="234"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        letterSpacing="1"
        fill="#78716C"
        stroke="none"
        textAnchor="middle"
      >
        SUBSTRATE
      </text>

      {/* ── die block centered on top of substrate ── */}
      <rect
        className="draw d2"
        pathLength={1}
        x="272"
        y="162"
        width="96"
        height="50"
      />
      <text
        x="320"
        y="191"
        fontFamily="var(--font-app-mono)"
        fontSize="12"
        fill="#1C1917"
        stroke="none"
        textAnchor="middle"
      >
        DIE
      </text>

      {/* ── landing pads on substrate (faint) ── */}
      <rect x="160" y="212" width="16" height="8" stroke="#E7E0D5" />
      <rect x="196" y="212" width="16" height="8" stroke="#E7E0D5" />
      <rect x="428" y="212" width="16" height="8" stroke="#E7E0D5" />
      <rect x="464" y="212" width="16" height="8" stroke="#E7E0D5" />

      {/* ── bond-wire arcs ── left side, 2 wires ── */}
      {/* wire from die left-top edge to left pad 1 */}
      <path className="draw d2" pathLength={1} d="M280 162 Q240 130 168 212" />
      {/* wire from die left-top edge to left pad 2 */}
      <path className="draw d2" pathLength={1} d="M286 162 Q248 118 204 212" />

      {/* ── bond-wire arcs ── right side, 2 wires ── */}
      {/* wire from die right-top edge to right pad 1 */}
      <path className="draw d3" pathLength={1} d="M360 162 Q400 130 472 212" />
      {/* wire from die right-top edge to right pad 2 */}
      <path className="draw d3" pathLength={1} d="M354 162 Q392 118 436 212" />

      {/* ── BGA solder balls beneath substrate ── */}
      {[175, 215, 255, 320, 385, 425, 465].map((cx) => (
        <circle
          key={cx}
          className="draw d3"
          pathLength={1}
          cx={cx}
          cy={266}
          r={8}
        />
      ))}
      <text
        x="505"
        y="270"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        letterSpacing="1"
        fill="#78716C"
        stroke="none"
      >
        BGA
      </text>

      {/* ── thermal arrow rising from die top ── */}
      {/* arrow shaft */}
      <path
        className="draw"
        pathLength={1}
        d="M320 162 L320 108"
        stroke="#EA7317"
      />
      {/* arrowhead */}
      <path
        className="draw"
        pathLength={1}
        d="M312 116 L320 104 L328 116"
        stroke="#EA7317"
      />
      {/* label */}
      <text
        x="334"
        y="132"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#78716C"
        stroke="none"
      >
        HEAT
      </text>

      {/* ── faint horizontal reference baseline ── */}
      <path d="M140 212H500" stroke="#E7E0D5" />
    </SchematicFrame>
  );
}
