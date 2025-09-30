import Button from "../Elements/Button/Index";
import InputForm from "../Elements/input";

export default function FormRegister() {
  const handleRegister = (e) => {
    e.preventDefault();
    // Ambil data dari localStorage dan parsing menjadi array
    const userStorage = JSON.parse(localStorage.getItem("userLogin")) || [];

    // Menangkap inputan
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Validasi email sudah terdaftar atau belum
    const emailExists = userStorage.some((user) => user.email === email);
    if (emailExists) {
      console.log("Email sudah terdaftar!");
      alert("Email sudah terdaftar!");
      return;
    }

    // Mendefinisikan inputan menjadi sebuah objek untuk ditambahkan
    const data = {
      name: fullName,
      email,
      password,
    };

    // Menambahkan data baru ke array localStorage
    let userArr = [...userStorage, data];

    // Konversi array menjadi json string
    const jsonData = JSON.stringify(userArr);

    // Menambahkan data json kedalam localStorage
    localStorage.setItem("userLogin", jsonData);
  };

  return (
    <form onSubmit={handleRegister}>
      <InputForm
        name="fullName"
        text="Fullname"
        type="text"
        placeholder="Insert your name here"
      />
      <InputForm
        name="email"
        text="Email"
        type="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        name="password"
        text="Password"
        type="password"
        placeholder="********"
      />
      <InputForm
        name="confirmPassword"
        text="Confirm Password"
        type="password"
        placeholder="********"
      />
      <Button
        className="w-full text-md font-semibold text-white bg-blue-600 px-2 py-1 rounded mt-5"
        type="submit"
      >
        Register
      </Button>
    </form>
  );
}
