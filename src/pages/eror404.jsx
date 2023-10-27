import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Upps!</h1>
      <p className="my-5 text-xl">Sorry, an expected error occured</p>
      <p className="text-lg">{error.statusText || error.massege}</p>
    </div>
  );
};

export default ErrorPage;
