import Input from "./Input";
import Label from "./Label";

const InputForm = ({ name, label, placeholder }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name} label={label} />
      <Input id={name} type={name} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
