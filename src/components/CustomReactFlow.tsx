import {
  addEdge,
  Background,
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
import { initialNodes } from "../initialData/initialNodes";
import { initialEdges } from "../initialData/initialEdges";

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
    <div className="border-2 border-gray-500 rounded-lg shadow-lg bg-white p-2 w-[90vw] h-[80vh] flex justify-center items-center">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onReconnect={onReconnect}
        edges={edges}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView={true}
        elevateEdgesOnSelect={true}
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
        <Background color={"#ccc"} variant="cross" />
      </ReactFlow>
    </div>
  );
}
