import { Sidebar } from "./components/Sidebar";
import { Task } from "./components/Task";

export function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Task />
    </div>
  );
}
