import CheckIcon from "../assets/icons/check.svg?react";
import LoaderIcon from "../assets/icons/loader.svg?react";

export function TaskItem({ task }) {
  function getStatusTaskItem() {
    if (task.status === "done") return "bg-[#00ADB5]/10 text-[#002C2E]";
    if (task.status === "in_progress") return "bg-[#FFAA04]/10 text-[#574000]";
    if (task.status === "not_started") return "bg-[#35383E]/5";
  }
  return (
    <div
      className={`py-3 flex items-center gap-2 text-sm rounded-lg pl-3 pr-4 ${getStatusTaskItem()}`}
    >
      <label
        className={`relative flex justify-center items-center cursor-pointer w-6 h-6 rounded-sm ${(task.status === "done" && "bg-[#00ADB5]") || (task.status === "in_progress" && "bg-[#FFAA04]") || (task.status === "not_started" && "bg-[#35383E]/20")}`}
      >
        <input
          type="checkbox"
          checked={task.status === "done"}
          className="opacity-0 cursor-pointer absolute w-full h-full"
        />
        {task.status === "done" && <CheckIcon />}
        {task.status === "in_progress" && <LoaderIcon />}
      </label>
      <p>{task.tittle}</p>
    </div>
  );
}
