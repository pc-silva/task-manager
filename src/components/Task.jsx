import { useState } from "react";
import { toast } from "sonner";
import AddIcon from "../assets/icons/add.svg?react";
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import { TASKS } from "../constants/TASKS";
import { Button } from "./Button";
import { TaskDialog } from "./TaskDialog";
import { TaskItem } from "./TaskItem";
import { TaskSeparator } from "./TaskSeparator";

export function Task() {
  const [tasks, setTasks] = useState(TASKS);
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  const morningTask = tasks.filter((task) => task.time === "morning");
  const afternoonTask = tasks.filter((task) => task.time === "afternoon");
  const eveningTask = tasks.filter((task) => task.time === "evening");

  function handleTaskStatusButton(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }
      if (task.status === "not_started") {
        toast.success("Tarefa em progresso!");
        return { ...task, status: "in_progress" };
      }
      if (task.status === "in_progress") {
        toast.success("Tarefa concluída!");
        return { ...task, status: "done" };
      }
      if (task.status === "done") {
        toast.success("Aguardando iniciar tarefa!");
        return { ...task, status: "not_started" };
      }
      return { ...task };
    });
    setTasks(newTask);
  }

  function handleTaskDeleteButton(taskId) {
    const newTask = tasks.filter((task) => {
      if (task.id !== taskId) {
        toast.success("Tarefa deletada!");
        return task;
      }
    });
    setTasks(newTask);
  }

  function handleAddTaskSubmit(task) {
    setTasks([...tasks, task]);
    toast.success("Tarefa adicionada com sucesso!");
  }

  return (
    <div className="px-8.5 pt-17.5 space-y-6 bg-[#F4F4F5] w-full">
      <div className="flex items-end justify-between font-semibold">
        <div className="space-y-1.5">
          <span className="text-[#00ADB5] text-xs">Minhas Tarefas</span>
          <h1 className="text-xl ">Minhas Tarefas</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost">
            Limpar tarefas
            <TrashIcon />
          </Button>
          <Button onClick={() => setAddTaskDialogIsOpen(true)}>
            Nova tarefa
            <AddIcon />
          </Button>
          <TaskDialog
            isOpen={addTaskDialogIsOpen}
            handleClose={() => setAddTaskDialogIsOpen(false)}
            handleSubmit={handleAddTaskSubmit}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg">
        <div className="space-y-3">
          <TaskSeparator>
            <SunIcon />
            Manhã
          </TaskSeparator>

          {morningTask.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleStatusButton={() => handleTaskStatusButton(task.id)}
              handleDeleteButton={() => {
                handleTaskDeleteButton(task.id);
              }}
            />
          ))}
        </div>

        <div className="space-y-3 my-6">
          <TaskSeparator>
            <CloudSunIcon />
            Tarde
          </TaskSeparator>

          {afternoonTask.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleStatusButton={() => handleTaskStatusButton(task.id)}
              handleDeleteButton={() => {
                handleTaskDeleteButton(task.id);
              }}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TaskSeparator>
            <MoonIcon />
            Noite
          </TaskSeparator>

          {eveningTask.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleStatusButton={() => handleTaskStatusButton(task.id)}
              handleDeleteButton={() => {
                handleTaskDeleteButton(task.id);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
