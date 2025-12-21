export function SidebarButton({ children, variant = "not_selected" }) {
  function getVariantOfTaskClass() {
    if (variant === "not_selected") return "text-[#35383E]";
    if (variant === "selected") return "bg-[#E6F7F8] text-[#00ADB5]";
  }

  return (
    <a
      href="#"
      className={`px-6 py-3 flex gap-2 items-center rounded-[0.625rem] ${getVariantOfTaskClass()}`}
    >
      {children}
    </a>
  );
}
