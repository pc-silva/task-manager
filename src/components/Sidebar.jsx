import HomeIcon from "../assets/icons/home.svg?react";
import TaskIcon from "../assets/icons/task.svg?react";
import { SidebarButton } from "./SidebarButton";

export function Sidebar() {
  return (
    <div className="m-0.5 h-screen w-68 bg-white p-0.5">
      <div className="py-6 px-8 space-y-4">
        <h1 className="text-[#00ADB5] text-xl font-semibold">Task Manager</h1>
        <p className="text-xs text-[#09090B]">
          Um simples{" "}
          <span className="text-[#00ADB5] font-semibold">
            organizador de tarefas
          </span>
        </p>
      </div>
      <div className="p-2 flex flex-col gap-2 text-sm font-semibold">
        <SidebarButton>
          <HomeIcon />
          Início
        </SidebarButton>

        <SidebarButton variant="selected">
          <TaskIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  );
}
