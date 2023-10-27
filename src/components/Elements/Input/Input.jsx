const Input = ({ id, type, placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="text-sm border rounded w-full py-2 px-3 text-slate700 placeholder:opacity-80"
    />
  );
};

export default Input;
