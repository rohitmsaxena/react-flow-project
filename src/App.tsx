import "@xyflow/react/dist/style.css";
import CustomReactFlow from "./components/CustomReactFlow";

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
