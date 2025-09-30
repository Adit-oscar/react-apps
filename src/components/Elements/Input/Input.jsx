import { forwardRef } from "react";

export default forwardRef(function Input(
  { type, name, placeholder, onChange },
  ref
) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      className="text-sm border border-slate-300 rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      ref={ref}
      autoComplete="off"
      onChange={onChange}
    />
  );
});
