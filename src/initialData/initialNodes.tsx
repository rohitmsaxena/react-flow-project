import { PART_TYPES } from "../types/customTypes";
import { type Node } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "fuelTank",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.fuelTank },
    position: { x: 0, y: 0 },
    style: { width: 400, height: 200, borderStyle: "dashed" },
  },
  {
    id: "fuel",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.fuel },
    parentId: "fuelTank",
    position: { x: 25, y: 100 },
    extent: "parent",
  },
  {
    id: "engine",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.engine },
    position: { x: 0, y: 250 },
  },
  {
    id: "vehicleSoftware",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.vehicleSoftware },
    position: { x: 400, y: 400 },
    style: { width: 400, height: 200 },
  },
  {
    id: "vehicleController",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.vehicleController },
    position: { x: 25, y: 100 },
    parentId: "vehicleSoftware",
    extent: "parent",
  },
  {
    id: "transmission",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.transmission },
    position: { x: 400, y: 250 },
  },
  {
    id: "driveshaft",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.driveshaft },
    position: { x: 800, y: 250 },
  },
  {
    id: "axelAssembly",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.rearAxleAssembly },
    position: { x: 1200, y: 250 },
    style: { width: 1200, height: 400 },
  },
  {
    id: "differential",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.differential },
    position: { x: 25, y: 100 },
    parentId: "axelAssembly",
    extent: "parent",
  },
  {
    id: "rearAxle",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.rearAxle },
    position: { x: 400, y: 100 },
    parentId: "axelAssembly",
    extent: "parent",
  },
  {
    id: "rearWheel1",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.rearWheel1 },
    // position: { x: 2000, y: 250 },
    position: { x: 800, y: 100 },
    parentId: "axelAssembly",
    extent: "parent",
  },
  {
    id: "rearWheel2",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.rearWheel2 },
    // position: { x: 2000, y: 350 },
    position: { x: 800, y: 250 },
    parentId: "axelAssembly",
    extent: "parent",
  },
];
