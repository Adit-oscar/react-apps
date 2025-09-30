import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouth from "../components/Layouts/AuthLayouth";

export default function RegisterPage({ type }) {
  return (
    <AuthLayouth title="Register" type={type}>
      <FormRegister />
    </AuthLayouth>
  );
}
