import { SchematicFrame, type SchematicProps } from "../schematic-frame";

export function IntegrationSchematic({ isActive, reduced }: SchematicProps) {
  return (
    <SchematicFrame
      label="Board · bias net"
      index={4}
      isActive={isActive}
      reduced={reduced}
    >
      {/* PCB outline */}
      <rect
        className="draw"
        pathLength={1}
        x="90"
        y="82"
        width="462"
        height="236"
        rx="6"
      />

      {/* Faint inner PCB keep-out margin */}
      <rect
        x="100"
        y="92"
        width="442"
        height="216"
        rx="4"
        stroke="var(--color-border)"
      />

      {/* RF MODULE inner rectangle */}
      <rect
        className="draw d2"
        pathLength={1}
        x="250"
        y="154"
        width="140"
        height="92"
        rx="4"
      />

      {/* RF MODULE label (emphasized) */}
      <text
        x="320"
        y="197"
        textAnchor="middle"
        fontFamily="var(--font-app-mono)"
        fontSize="12"
        fill="var(--color-text)"
        stroke="none"
      >
        RF MODULE
      </text>

      {/* Small sub-label inside module */}
      <text
        x="320"
        y="213"
        textAnchor="middle"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="var(--color-text-muted)"
        stroke="none"
      >
        RFIC
      </text>

      {/* RIGHT-EDGE ROUTED TRACES — evenly fanned from module pins to pads.
          Pad centers: 140, 180, 220, 260 (40px pitch); each trace meets the
          pad's left edge at x=521 so traces and pads line up exactly. */}
      <path
        className="draw"
        pathLength={1}
        d="M390 172 H460 V140 H521"
        stroke="var(--color-primary)"
      />
      <path
        className="draw d2"
        pathLength={1}
        d="M390 188 H480 V180 H521"
        stroke="var(--color-primary)"
      />
      <path
        className="draw d2"
        pathLength={1}
        d="M390 212 H480 V220 H521"
        stroke="var(--color-primary)"
      />
      <path
        className="draw d3"
        pathLength={1}
        d="M390 228 H460 V260 H521"
        stroke="var(--color-primary)"
      />

      {/* Connector pads — uniform squares, evenly spaced */}
      <rect x="521" y="134" width="12" height="12" rx="2" />
      <rect x="521" y="174" width="12" height="12" rx="2" />
      <rect x="521" y="214" width="12" height="12" rx="2" />
      <rect x="521" y="254" width="12" height="12" rx="2" />

      {/* BIAS NETWORK — bottom-left */}

      {/* Trace from module left/bottom to bias pads */}
      <path className="draw d3" pathLength={1} d="M250 220 H200 V280 H155" />

      {/* Resistor zig-zag at the end of the bias trace (~x 120–155, y 280) */}
      <path
        className="draw d3"
        pathLength={1}
        d="M155 280 L148 270 L141 290 L134 270 L127 290 L120 270 L113 280 H105"
      />

      {/* Two small bias pads */}
      <rect x="96" y="274" width="10" height="12" rx="2" />

      {/* Second bias tap from mid-trace */}
      <path className="draw d3" pathLength={1} d="M200 280 V310 H170" />
      <rect x="161" y="304" width="10" height="12" rx="2" />

      {/* BIAS label */}
      <text
        x="138"
        y="300"
        textAnchor="middle"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="var(--color-text-muted)"
        stroke="none"
      >
        BIAS
      </text>
    </SchematicFrame>
  );
}
