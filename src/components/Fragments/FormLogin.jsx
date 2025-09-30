import { login } from "../../services/auth.service";
import Button from "../Elements/Button/Index";
import InputForm from "../Elements/input";
import { useEffect, useRef, useState } from "react";
import LoginMessage from "../Elements/message/Login";

export default function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginFailed, setLoginFailed] = useState("");

  const validateForm = () => {
    const errors = {};

    if (!username) {
      errors.username = "Username tidak boleh kosong!";
    }

    if (!password) {
      errors.password = "Password tidak boleh kosong!";
    } else if (password.length < 7) {
      errors.password = "Password minimal 7 karakter!";
    }

    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setLoginFailed("");
      setErrors(errors);
    } else {
      setErrors({});

      const credentials = {
        username,
        password,
      };

      login(credentials, (status, res) => {
        if (status) {
          localStorage.setItem("token", res.token);
          window.location.href = "/products";
        } else {
          setLoginFailed(res.response.data);
        }
      });
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {loginFailed && <p className="text-center text-red-600">{loginFailed}</p>}
      <InputForm
        name="username"
        text="Username"
        type="text"
        placeholder="John Doe"
        ref={usernameRef}
        onChange={handleUsername}
      />
      {errors.username && <LoginMessage>{errors.username}</LoginMessage>}
      <InputForm
        name="password"
        text="Password"
        type="password"
        placeholder="********"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <LoginMessage>{errors.password}</LoginMessage>}
      <Button
        className="w-full text-md font-semibold text-white bg-blue-600 px-2 py-1 rounded mt-5 hover:cursor-pointer"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}
