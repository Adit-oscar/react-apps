import { forwardRef } from "react";
import Input from "./input";
import Label from "./Label";

export default forwardRef(function InputForm(
  { name, text, type, placeholder, onChange },
  ref
) {
  return (
    <div className="mt-2">
      <Label htmlFor={name}>{text}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
      />
    </div>
  );
});
