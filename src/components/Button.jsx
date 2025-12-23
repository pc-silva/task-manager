export function Button({
  children,
  variant = "primary",
  size = "small",
  ...rest
}) {
  function getVariantOfTaskClass() {
    if (variant === "primary") return "bg-[#00ADB5] text-white";
    if (variant === "secondary") return "bg-[#EEEEEE]";
    if (variant === "ghost") return "bg-transparent text-[#818181]";
  }

  function getSizeButton() {
    if (size === "small") return "py-1 text-xs";
    if (size === "large") return "py-2 text-sm w-full";
  }

  return (
    <button
      className={`gap-1 font-semibold justify-center px-4 hover:opacity-75 transition cursor-pointer rounded-sm flex ${getVariantOfTaskClass()} ${getSizeButton()}`}
      {...rest}
    >
      {children}
    </button>
  );
}
