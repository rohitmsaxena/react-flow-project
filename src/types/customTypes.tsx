import { Position } from "@xyflow/react";

export const PART_TYPES = {
  fuelTank: "fuelTank: FuelTank",
  fuel: "fuel: Fuel",
  engine: "engine: Engine",
  transmission: "transmission: Transmission",
  driveshaft: "driveshaft: Driveshaft",
  differential: "differential: Differential",
  rearAxle: "rearAxle: RearAxle",
  rearWheel1: "rearWheel1: Wheel",
  rearWheel2: "rearWheel2: Wheel",
  rearAxleAssembly: "rearAxleAssembly: AxleAssembly",
  vehicleSoftware: "vehicleSoftware",
  vehicleController: "vehicleController",
} as const;

export type PartType = keyof typeof PART_TYPES; // "fuelTank" | "fuel" | ...

export const PART_HANDLES = {
  fuelTank: [{ type: "source", position: Position.Bottom, id: "fuel-out" }],
  fuel: [],
  engine: [
    { type: "target", position: Position.Top, id: "engine-in" },
    { type: "source", position: Position.Right, id: "engine-torque" },
    { type: "source", position: Position.Bottom, id: "engine-status" },
  ],
  transmission: [
    { type: "target", position: Position.Left, id: "transmission-in" },
    { type: "source", position: Position.Right, id: "transmission-out" },
  ],
  driveshaft: [
    { type: "target", position: Position.Left, id: "driveshaft-in" },
    { type: "source", position: Position.Right, id: "driveshaft-out" },
  ],
  differential: [
    { type: "target", position: Position.Left, id: "differential-in" },
    { type: "source", position: Position.Right, id: "differential-out" },
  ],
  rearAxle: [
    { type: "target", position: Position.Left, id: "rearAxle-in" },
    {
      type: "source",
      position: Position.Right,
      id: "rearAxle-out1",
      style: { top: "30px" },
    },
    {
      type: "source",
      position: Position.Right,
      id: "rearAxle-out2",
      style: { top: "90px" },
    },
  ],
  rearWheel1: [
    { type: "target", position: Position.Left, id: "rearWheel1-in" },
    { type: "source", position: Position.Right, id: "rearWheel1-out" },
  ],
  rearWheel2: [
    { type: "target", position: Position.Left, id: "rearWheel2-in" },
    { type: "source", position: Position.Right, id: "rearWheel2-out" },
  ],
  rearAxleAssembly: [],
  vehicleSoftware: [],
  vehicleController: [
    { type: "target", position: Position.Left, id: "vehicleSoftware" },
  ],
};
