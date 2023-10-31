import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <form onSubmit={handleLogin}>
      <InputForm name="email" label="Email" placeholder="email@example.com"  ref={emailRef}/>
      <InputForm name="password" label="Password" placeholder="*********" />
      <Button type="submit" onClick={() => {}} className="bg-blue-600 w-full">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
