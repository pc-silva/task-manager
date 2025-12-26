export function InputLabel(props) {
  return (
    <label className="font-semibold" {...props}>
      {props.children}
    </label>
  );
}
