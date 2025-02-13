import {
  addEdge,
  ConnectionMode,
  ControlButton,
  Controls,
  ReactFlow,
  reconnectEdge,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { useCallback } from "react";
import CustomNode from "./CustomNode";
import { PART_TYPES } from "../types/customTypes";

const initialNodes = [
  {
    id: "fuelTank",
    type: "engineeringPart",
    data: { type: "part", subType: PART_TYPES.fuelTank },
    position: { x: 0, y: 0 },
    style: { width: 400, height: 200 },
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

const initialEdges = [
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
    zIndex: 1000000,
  },
  {
    id: "differential-rearAxle",
    source: "differential",
    sourceHandle: "differential-out",
    target: "rearAxle",
    targetHandle: "rearAxle-in",
    zIndex: 1000000,
  },
  {
    id: "rearAxle-wheel1",
    source: "rearAxle",
    sourceHandle: "rearAxle-out1",
    target: "rearWheel1",
    targetHandle: "rearWheel1-in",
    zIndex: 1000000,
  },
  {
    id: "rearAxle-wheel2",
    source: "rearAxle",
    sourceHandle: "rearAxle-out2",
    target: "rearWheel2",
    targetHandle: "rearWheel2-in",
    zIndex: 1000000,
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

  const onReconnect = useCallback(
    (oldEdge, newConnection) =>
      setEdges((els) => reconnectEdge(oldEdge, newConnection, els)),
    [],
  );

  const addNode = () => {
    setNodes((currentNodes) => [
      ...currentNodes,
      {
        id: `node-${nodes.length + 1}`,
        type: "engineeringPart",
        data: { type: "part", subType: PART_TYPES.fuelTank },
        position: { x: Math.random() * 400, y: Math.random() * 400 },
      },
    ]);
  };

  return (
    <div className="border-2 border-gray-500 rounded-lg shadow-lg bg-white p-2 w-[80vw] h-[70vh] flex justify-center items-center">
      {/*<div style={{ height: "100%", width: "100%" }}>*/}
      <ReactFlow
        // ref={ref}
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onReconnect={onReconnect}
        edges={edges}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView={true}
        defaultEdgeOptions={{
          style: {
            stroke: "black",
            strokeWidth: 4,
          },
        }}
      >
        <Controls>
          <ControlButton onClick={() => addNode()}>➕</ControlButton>
        </Controls>
        {/*<Background color={"#ccc"} variant="cross" />*/}
      </ReactFlow>
    </div>
  );
}
