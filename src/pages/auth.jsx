import LoginPage from "./login";
import RegisterPage from "./register";

export default function Auth({ type }) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      {type === "login" ? (
        <LoginPage type={type} />
      ) : (
        <RegisterPage type={type} />
      )}
    </div>
  );
}
