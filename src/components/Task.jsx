import AddIcon from "../assets/icons/add.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import { Button } from "./Button";
import { TaskSeparator } from "./TaskSeparator";

export function Task() {
  return (
    <div className="px-8.5 pt-17.5 space-y-6 bg-[#F4F4F5] w-full">
      <div className="flex items-end justify-between font-semibold">
        <div className="space-y-1.5">
          <span className="text-[#00ADB5] text-xs">Minhas Tarefas</span>
          <h1 className="text-xl ">Minhas Tarefas</h1>
        </div>
        <div className="flex gap-2">
          <Button>
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button variant="primary">
            Nova tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg">
        <div className="space-y-3">
          <TaskSeparator>
            <SunIcon />
            Manhã
          </TaskSeparator>
        </div>

        <div className="space-y-3 my-6">
          <TaskSeparator>
            <CloudSunIcon />
            Tarde
          </TaskSeparator>
        </div>

        <div className="space-y-3">
          <TaskSeparator>
            <MoonIcon />
            Noite
          </TaskSeparator>
        </div>
      </div>
    </div>
  );
}
