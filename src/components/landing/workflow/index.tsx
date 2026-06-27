import type { ReactElement } from "react";
import type { SchematicProps } from "./schematic-frame";
import { DesignSchematic } from "./schematics/design";
import { SimulationSchematic } from "./schematics/simulation";
import { TapeoutSchematic } from "./schematics/tapeout";
import { PackagingSchematic } from "./schematics/packaging";
import { IntegrationSchematic } from "./schematics/integration";
import { CharacterizationSchematic } from "./schematics/characterization";
import { ValidationSchematic } from "./schematics/validation";

// Index aligns with workflowSteps order in workflow-explorer.tsx.
export const STAGE_SCHEMATICS: Array<(p: SchematicProps) => ReactElement> = [
  DesignSchematic,
  SimulationSchematic,
  TapeoutSchematic,
  PackagingSchematic,
  IntegrationSchematic,
  CharacterizationSchematic,
  ValidationSchematic,
];

export function StageSchematic({
  active,
  reduced,
}: {
  active: number;
  reduced: boolean;
}) {
  const Schematic = STAGE_SCHEMATICS[active] ?? STAGE_SCHEMATICS[0];
  return <Schematic isActive key={active} reduced={reduced} />;
}
