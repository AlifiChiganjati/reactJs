import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef((props, ref) => {
  const { name, label, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name} label={label} />
      <Input id={name} type={name} placeholder={placeholder} ref={ref} />
    </div>
  );
});
export default InputForm;
