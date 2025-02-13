import "@xyflow/react/dist/style.css";
import CustomReactFlow from "./components/CustomReactFlow";

export default function App() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-center">
          <a className="btn btn-ghost text-5xl p-10">React Flow Playground</a>
        </div>
      </div>
      <div className="flex justify-center items-center h-[calc(100vh-10rem)] w-full">
        <CustomReactFlow />
      </div>
    </>
  );
}
