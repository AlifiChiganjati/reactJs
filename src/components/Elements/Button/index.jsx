const Button = ({
  type = "button",
  onClick,
  className = "bg-black",
  children = "...",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
    >
      {children}
    </button>
  );
};
export default Button;
