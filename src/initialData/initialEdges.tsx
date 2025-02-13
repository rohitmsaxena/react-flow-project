export const initialEdges = [
  {
    id: "fuelTank-to-engine",
    source: "fuelTank", // Node ID of the fuel
    sourceHandle: "fuelTank-out", // Handle ID of the fuel node
    target: "engine", // Node ID of the engine
    targetHandle: "engine-in", // Handle ID of the engine node
    label: "fuel",
    markerEnd: { type: "arrowclosed", width: 10, height: 10 },
  },
  {
    id: "engine-to-transmission",
    source: "engine",
    sourceHandle: "engine-torque",
    target: "transmission",
    targetHandle: "transmission-in",
    label: "torque",
    markerEnd: { type: "arrowclosed", width: 10, height: 10 },
  },
  {
    id: "engine-vehicleController",
    source: "engine",
    sourceHandle: "engine-status",
    target: "vehicleController",
    label: "vehicleSoftware",
    markerEnd: { type: "arrowclosed", width: 10, height: 10 },
    zIndex: 2,
  },
  {
    id: "transmission-driveshaft",
    source: "transmission",
    sourceHandle: "transmission-out",
    target: "driveshaft",
    targetHandle: "driveshaft-in",
  },
  {
    id: "driveshaft-differential",
    source: "driveshaft",
    sourceHandle: "driveshaft-out",
    target: "differential",
    targetHandle: "differential-in",
    zIndex: 2,
  },
  {
    id: "differential-rearAxle",
    source: "differential",
    sourceHandle: "differential-out",
    target: "rearAxle",
    targetHandle: "rearAxle-in",
    zIndex: 2,
  },
  {
    id: "rearAxle-wheel1",
    source: "rearAxle",
    sourceHandle: "rearAxle-out1",
    target: "rearWheel1",
    targetHandle: "rearWheel1-in",
    zIndex: 2,
  },
  {
    id: "rearAxle-wheel2",
    source: "rearAxle",
    sourceHandle: "rearAxle-out2",
    target: "rearWheel2",
    targetHandle: "rearWheel2-in",
    zIndex: 2,
  },
];
