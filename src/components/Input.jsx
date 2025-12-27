import { InputLabel } from "./InputLabel";

export function Input({ label, ...rest }) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        type="text"
        className="border border-solid border-[#ECECEC] rounded-lg px-4 py-3 placeholder:text-[#9A9C9F outline-none focus:border-[#00ADB5] focus:border-solid"
        {...rest}
      />
    </div>
  );
}
