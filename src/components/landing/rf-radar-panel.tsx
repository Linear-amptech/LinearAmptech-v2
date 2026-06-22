"use client";

import {
  CircuitBoard,
  Cpu,
  Layers3,
  RadioTower,
  RadarIcon,
  Satellite,
  Waves,
} from "lucide-react";

import { IconContainer, Radar } from "@/components/ui/radar-effect";

export function RfRadarPanel() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-lg border border-cyan-200/15 bg-slate-950/70 px-4 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_110px_rgba(0,0,0,0.34)] backdrop-blur-xl">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_105%,rgba(34,211,238,0.22),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.1),rgba(2,6,23,0.7))]"
      />
      <div className="relative mx-auto flex h-[26rem] w-full max-w-4xl flex-col items-center justify-center space-y-8 overflow-hidden">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex w-full items-center justify-center gap-8 md:justify-between md:gap-0">
            <IconContainer
              text="GaN MMIC"
              delay={0.2}
              icon={<CircuitBoard className="size-7 text-cyan-200" />}
            />
            <IconContainer
              text="RFIC IP"
              delay={0.4}
              icon={<Cpu className="size-7 text-cyan-200" />}
            />
            <IconContainer
              text="mm-Wave Tx/Rx"
              delay={0.3}
              icon={<Waves className="size-7 text-cyan-200" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-lg">
          <div className="flex w-full items-center justify-center gap-8 md:justify-between md:gap-0">
            <IconContainer
              text="Radar Front End"
              delay={0.5}
              icon={<RadarIcon className="size-7 text-cyan-200" />}
            />
            <IconContainer
              text="RF Modules"
              delay={0.8}
              icon={<RadioTower className="size-7 text-cyan-200" />}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex w-full items-center justify-center gap-8 md:justify-between md:gap-0">
            <IconContainer
              text="Antenna Arrays"
              delay={0.6}
              icon={<Satellite className="size-7 text-cyan-200" />}
            />
            <IconContainer
              text="Packaging"
              delay={0.7}
              icon={<Layers3 className="size-7 text-cyan-200" />}
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent" />
      </div>
    </div>
  );
}
