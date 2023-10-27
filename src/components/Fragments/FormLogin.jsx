import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm name="email" label="Email" placeholder="email@example.com" />
      <InputForm name="password" label="Password" placeholder="*********" />
      <Button className="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
