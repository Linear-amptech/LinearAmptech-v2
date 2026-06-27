import { SchematicFrame, type SchematicProps } from "../schematic-frame";

export function DesignSchematic({ isActive, reduced }: SchematicProps) {
  return (
    <SchematicFrame
      label="Topology · frequency plan"
      index={0}
      isActive={isActive}
      reduced={reduced}
    >
      {/* signal rail */}
      <path className="draw" pathLength={1} d="M70 200H190" />
      {/* input matching network (series L, shunt C) */}
      <path className="draw" pathLength={1} d="M190 200h26m0 0v-34m0 34v34" />
      <path
        className="draw d2"
        pathLength={1}
        d="M216 166h-10m20 0h-10M216 234h-10m20 0h-10"
      />
      {/* amplifier triangle */}
      <path
        className="draw d2"
        pathLength={1}
        d="M250 150 L350 200 L250 250 Z"
      />
      {/* bias stub from amp top */}
      <path className="draw d2" pathLength={1} d="M300 175V96h40" />
      <text
        x="346"
        y="100"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#64748b"
        stroke="none"
      >
        Vdd
      </text>
      {/* output matching + rail */}
      <path
        className="draw d3"
        pathLength={1}
        d="M350 200h40m0 0v-30m0 30v30"
      />
      <path className="draw d3" pathLength={1} d="M390 200H570" />
      {/* port nodes */}
      <circle className="draw" pathLength={1} cx="70" cy="200" r="6" />
      <circle className="draw d3" pathLength={1} cx="570" cy="200" r="6" />
      {/* node labels */}
      <text
        x="58"
        y="186"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#64748b"
        stroke="none"
      >
        IN
      </text>
      <text
        x="556"
        y="186"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        fill="#64748b"
        stroke="none"
      >
        OUT
      </text>
      <text
        x="276"
        y="206"
        fontFamily="var(--font-app-mono)"
        fontSize="12"
        fill="#0b1220"
        stroke="none"
      >
        PA
      </text>
      {/* spec callout strip */}
      <text
        x="70"
        y="310"
        fontFamily="var(--font-app-mono)"
        fontSize="11"
        letterSpacing="1"
        fill="#64748b"
        stroke="none"
      >
        GAIN · MATCH · Pout
      </text>
    </SchematicFrame>
  );
}
