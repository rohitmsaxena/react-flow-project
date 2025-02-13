import {
  Handle,
  HandleType,
  Node,
  NodeResizer,
  useReactFlow,
  useUpdateNodeInternals,
} from "@xyflow/react";
import React, { useCallback, useEffect, useState } from "react";
import { PART_HANDLES, PART_TYPES, PartType } from "../types/customTypes";

export type CustomNodeType = Node<{
  type: string;
  subType: PartType;
}>;

const CustomNode = ({ data, style, id, width, height }: CustomNodeType) => {
  const { getNodes, setNodes } = useReactFlow();
  const updateNodeInternals = useUpdateNodeInternals();

  const [partKey, setPartKey] = useState<PartType>(
    Object.keys(PART_TYPES).find(
      (key) => PART_TYPES[key as PartType] === data.subType,
    ) as PartType,
  );

  const [selectedType, setSelectedType] = useState<PartType>(
    Object.keys(PART_TYPES).find(
      (key) => PART_TYPES[key as PartType] === data.subType,
    ) as PartType,
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = event.target.value as PartType;
    setSelectedType(newType);

    setNodes((nodes) =>
      nodes.map((node) =>
        node.id === id
          ? {
              ...node,
              data: {
                ...node.data,
                subType: newType,
              },
            }
          : node,
      ),
    );
    setPartKey(newType);
  };

  useEffect(() => {
    updateNodeInternals(id);
  }, [selectedType, id, updateNodeInternals]);

  const onDelete = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    // setEdges((edges) => edges.filter((edge) => edge.source !== id));
  }, [id, setNodes]);

  const onAddInside = () => {
    setNodes((nodes) => {
      // 🔥 Increase parent's height by 200
      return [
        ...nodes.map((node) =>
          node.id === id
            ? {
                ...node,
                style: {
                  ...node.style,
                  height: (height || 100) + 200,
                  width: (width || 100) + 20,
                },
              }
            : node,
        ),
        {
          id: `child-${Date.now()}`,
          type: "engineeringPart",
          data: { type: "part", subType: "fuelTank" },
          parentId: id,
          position: {
            x: 20,
            y: 100,
          },
          extent: "parent",
          style: {
            zIndex: 2,
          },
        },
      ];
    });

    // 🔥 Ensure React Flow updates the layout
    setTimeout(() => updateNodeInternals(id), 0);
  };

  return (
    <div
      className="border-2 border-gray-500 rounded-lg border-dashed shadow-md bg-white text-center p-2 transition-all"
      style={{
        width: width || 330,
        height: height || 80,
        border: "solid 1px black",
      }}
    >
      <NodeResizer minWidth={200} minHeight={30} />
      <div style={{ position: "relative", width: "100%" }}>
        <button
          onClick={() => onAddInside()}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            cursor: "pointer",
          }}
        >
          ➕
        </button>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "gray",
            textAlign: "center",
          }}
        >
          &lt;&lt;{data.type}&gt;&gt;
        </div>

        <button
          onClick={() => onDelete()}
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            cursor: "pointer",
          }}
        >
          🗑️
        </button>
      </div>

      <select
        value={selectedType}
        onChange={handleChange}
        className="mt-2 p-1 border border-gray-400 rounded text-sm w-60"
      >
        {Object.keys(PART_TYPES).map((type) => (
          <option key={type} value={type}>
            {PART_TYPES[type as PartType]} {/* Show colon format */}
          </option>
        ))}
      </select>

      {PART_HANDLES[partKey]?.map((handle: any) => (
        <Handle
          key={handle.id}
          type={handle.type as HandleType}
          position={handle.position}
          id={handle.id}
          style={{
            width: "14px", // Adjust size
            height: "14px",
            backgroundColor: "white", // White inside
            border: "2px solid black", // Black border
            borderRadius: "0px", // Ensures it stays square
            ...(handle.style || {}),
          }}
        />
      ))}
    </div>
  );
};

export default CustomNode;
