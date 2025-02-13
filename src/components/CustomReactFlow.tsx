import {
  addEdge,
  ConnectionMode,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { useCallback } from "react";
import CustomNode from "./CustomNode";
import { PART_TYPES } from "../types/customTypes";

const initialNodes = [
  {
    id: "fuel",
    type: "engineeringPart",
    data: { type: "group part", subType: PART_TYPES.fuelTank },
    position: { x: 0, y: 0 },
  },
  {
    id: "engine",
    type: "engineeringPart",
    data: { type: "group part", subType: PART_TYPES.engine },
    position: { x: 0, y: 150 },
  },
  {
    id: "transmission",
    type: "engineeringPart",
    data: { type: "group part", subType: PART_TYPES.transmission },
    position: { x: 400, y: 150 },
  },
  {
    id: "driveshaft",
    type: "engineeringPart",
    data: { type: "group part", subType: PART_TYPES.driveshaft },
    position: { x: 800, y: 150 },
  },
  {
    id: "differential",
    type: "engineeringPart",
    data: { type: "group part", subType: PART_TYPES.differential },
    position: { x: 1200, y: 150 },
  },
  {
    id: "rearAxle",
    type: "engineeringPart",
    data: { type: "group part", subType: PART_TYPES.rearAxle },
    position: { x: 1600, y: 150 },
  },
  {
    id: "rearWheel1",
    type: "engineeringPart",
    data: { type: "group part", subType: PART_TYPES.rearWheel1 },
    position: { x: 2000, y: 150 },
  },
  {
    id: "rearWheel2",
    type: "engineeringPart",
    data: { type: "group part", subType: PART_TYPES.rearWheel2 },
    position: { x: 2000, y: 300 },
  },
];

const initialEdges = [
  {
    id: "fuel-to-engine",
    source: "fuel", // Node ID of the fuel
    sourceHandle: "fuel-out", // Handle ID of the fuel node
    target: "engine", // Node ID of the engine
    targetHandle: "engine-in", // Handle ID of the engine node
    style: { stroke: "black", strokeWidth: 4 },
  },
  {
    id: "engine-to-transmission",
    source: "engine",
    sourceHandle: "engine-torque",
    target: "transmission",
    targetHandle: "transmission-in",
    style: { stroke: "black", strokeWidth: 4 },
  },
  {
    id: "transmission-driveshaft",
    source: "transmission",
    sourceHandle: "transmission-out",
    target: "driveshaft",
    targetHandle: "driveshaft-in",
    style: { stroke: "black", strokeWidth: 4 },
  },
  {
    id: "driveshaft-differential",
    source: "driveshaft",
    sourceHandle: "driveshaft-out",
    target: "differential",
    targetHandle: "differential-in",
    style: { stroke: "black", strokeWidth: 4 },
  },
  {
    id: "differential-rearAxle",
    source: "differential",
    sourceHandle: "differential-out",
    target: "rearAxle",
    targetHandle: "rearAxle-in",
    style: { stroke: "black", strokeWidth: 4 },
  },
  {
    id: "rearAxle-wheel1",
    source: "rearAxle",
    sourceHandle: "rearAxle-out1",
    target: "rearWheel1",
    targetHandle: "rearWheel1-in",
    style: { stroke: "black", strokeWidth: 4 },
  },
  {
    id: "rearAxle-wheel2",
    source: "rearAxle",
    sourceHandle: "rearAxle-out2",
    target: "rearWheel2",
    targetHandle: "rearWheel2-in",
    style: { stroke: "black", strokeWidth: 4 },
  },
];

const nodeTypes = { engineeringPart: CustomNode };

export default function CustomReactFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="border-2 border-gray-500 rounded-lg shadow-lg bg-white p-2 w-[80vw] h-[70vh] flex justify-center items-center">
      {/*<div style={{ height: "100%", width: "100%" }}>*/}
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        edges={edges}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView={true}
      >
        {/*<Background color={"#ccc"} variant="cross" />*/}
      </ReactFlow>
    </div>
  );
}
