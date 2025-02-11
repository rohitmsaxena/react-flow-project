import "@xyflow/react/dist/style.css";
import CustomReactFlow from "./components/CustomReactFlow";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">React Flow</a>{" "}
        </div>
      </div>
      <div className="flex justify-center items-center h-[calc(100vh-4rem)] w-full">
        <CustomReactFlow />
      </div>
    </>
  );
}
