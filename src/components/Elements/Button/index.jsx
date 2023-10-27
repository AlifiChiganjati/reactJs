const Button = ({ className = "bg-black", children = "..." }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${className} text-white`}
    >
      {children}
    </button>
  );
};
export default Button;
