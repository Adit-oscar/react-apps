import { Link } from "react-router-dom";

export default function AuthLayouth({ children, title, type }) {
  return (
    <div className="w-full max-w-xs">
      <h1 className="text-3xl text-center font-bold text-blue-600 mb-2">
        {title}
      </h1>
      <p className="text-center font-medium text-slate-500">
        Welcome, please enter your detail!
      </p>
      {children}
      <p className="text-sm mt-4 text-center">
        {type === "login" ? "Don't have an account? " : "Have an account? "}
        {type === "login" && (
          <Link to="/register" className="font-bold text-blue-600">
            Sign Up
          </Link>
        )}
        {type === "register" && (
          <Link className="font-bold text-blue-600" to="/login">
            Login
          </Link>
        )}
      </p>
    </div>
  );
}
