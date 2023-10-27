import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm name="name" label="Name" placeholder="Input Your Name" />
      <InputForm name="email" label="Email" placeholder="email@example.com" />
      <InputForm name="password" label="Password" placeholder="*********" />
      <InputForm
        name="comfirmPassword"
        label="Comfirm Password"
        placeholder="*********"
      />
      <Button className="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormLogin;
