export function Input({ label, ...rest }) {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <label htmlFor={rest.id} className="font-semibold">
        {label}
      </label>
      <input
        type="text"
        className="border border-solid border-[#ECECEC] rounded-lg px-4 py-3 placeholder:text-[#9A9C9F outline-none focus:border-[#00ADB5] focus:border-solid"
        {...rest}
      />
    </div>
  );
}
