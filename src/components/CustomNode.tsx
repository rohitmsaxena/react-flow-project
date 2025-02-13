import {
  Handle,
  HandleType,
  Node,
  NodeResizer,
  useReactFlow,
  useUpdateNodeInternals,
} from "@xyflow/react";
import React, { useEffect, useState } from "react";
import { PART_HANDLES, PART_TYPES, PartType } from "../types/customTypes";

export type CustomNodeType = Node<{
  type: string;
  subType: PartType;
}>;

const CustomNode = ({ data, style, id, width, height }: CustomNodeType) => {
  // todo: fix its a hack
  const partKey = Object.keys(PART_TYPES).find(
    (key) => PART_TYPES[key as PartType] === data.subType,
  ) as PartType;

  const { getNodes, setNodes } = useReactFlow();
  const updateNodeInternals = useUpdateNodeInternals();
  const [handleCount, setHandleCount] = useState(
    PART_HANDLES[partKey]?.length || 0,
  );
  const [selectedType, setSelectedType] = useState<PartType>(
    Object.keys(PART_TYPES).find(
      (key) => PART_TYPES[key as PartType] === data.subType,
    ) as PartType,
  );
  console.log(data.subType, selectedType);

  // 🔥 Update Node Data When Dropdown Changes
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
                subType: newType, // Stores key (dot notation)
              },
            }
          : node,
      ),
    );
  };

  useEffect(() => {
    updateNodeInternals(id);
  }, [selectedType, id, updateNodeInternals]);

  console.log(PART_HANDLES[data.subType], data.subType);

  return (
    <div
      className="border-2 border-gray-500 rounded-lg border-dashed shadow-md bg-white text-center p-2 transition-all"
      style={{
        width: width || 350,
        height: height || 120,
        border: "solid 1px black",
      }}
    >
      <NodeResizer minWidth={200} minHeight={30} />
      <div className="text-xs font-bold text-gray-600">
        &lt;&lt;{data.type}&gt;&gt;
      </div>
      {/* Dropdown to Select Part Type */}
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
      <div>
        handleCount: {handleCount} {data.subType}
      </div>

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
