import { Link } from "react-router-dom";

const AuthLayouts = ({ children, title, type }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs ">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, add please your details
        </p>
        {children}
        {/* {type === "login" ? "Don't have account?" : "I have an account?"} */}
        {/* {type === "login" && ( */}
        {/*   <Link to="/register" className="font-bold text-blue-600"> */}
        {/*     Sign up */}
        {/*   </Link> */}
        {/* )} */}
        {/**/}
        {/* {type === "register" && ( */}
        {/*   <Link to="/login" className="font-bold text-blue-600"> */}
        {/*     Sign in */}
        {/*   </Link> */}
        {/* )} */}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Dont have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        I have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Sign in
        </Link>
      </p>
    );
  }
};
export default AuthLayouts;
