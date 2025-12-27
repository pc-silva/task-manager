import { InputLabel } from "./InputLabel";

export function TaskSelect(props) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        id="time"
        className="border border-solid border-[#ECECEC] rounded-lg px-4 py-3 placeholder:text-[#9A9C9F outline-none focus:border-[#00ADB5] focus:border-solid"
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  );
}
