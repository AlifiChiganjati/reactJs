const AuthLayouts = ({ children, title }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs ">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, add please your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayouts;
