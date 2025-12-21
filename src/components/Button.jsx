export function Button({ children, variant = "ghost" }) {
  function getVariantOfTaskClass() {
    if (variant === "ghost") return "bg-transparent text-[#818181]";
    if (variant === "primary") return "bg-[#00ADB5] text-white";
  }

  return (
    <button
      className={`gap-1 px-4 py-1 hover:opacity-75 transition cursor-pointer text-xs rounded-sm flex ${getVariantOfTaskClass()}`}
    >
      {children}
    </button>
  );
}
