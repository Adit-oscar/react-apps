import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouth from "../components/Layouts/AuthLayouth";

export default function LoginPage({ type }) {
  return (
    <AuthLayouth title="Login" type={type}>
      <FormLogin />
    </AuthLayouth>
  );
}
