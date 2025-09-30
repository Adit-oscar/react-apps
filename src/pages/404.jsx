import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="h-dvh w-full bg-amber flex gap-3.5 flex-col justify-center items-center">
      <p className="text-4xl font-semibold">404</p>
      <p className="text-2xl font-semibold">
        {error.statusText || error.message} !
      </p>
      <Link
        className="bg-emerald-600 text-white font-semibold text-2xl px-3 rounded-sm"
        to="/"
      >
        Back
      </Link>
    </div>
  );
}
