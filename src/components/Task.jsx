import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import { Button } from "./Button";

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
    </div>
  );
}
