import { useState } from "react";
import Banner from "../componets/Banner";
import Footer from "../componets/Footer";
import Logo from "../componets/Logo";
import Input from "../componets/InputFields";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

function Register() {
  const alert = useAlert();
  const history = useHistory();
  const [identificationCard, setIdentificationCard] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = async (e) => {
    // detenemos la recarga de la pagina
    e.preventDefault();
    // validamos que los campos esten llenos
    const isEmpty = !identificationCard || !password || !passwordConfirm;

    if (isEmpty) {
      return;
    }
    if (password.length < 8) {
      alert.error("longitud de contraseña insuficiente");
      return;
    }
    // verificamos que el usuario haya ingresado correctamente ambas contraseñas
    if (password !== passwordConfirm) {
      alert.error("las contraseñas ingresadas no coinciden");
      return;
    }
    // solicitar al servidor, crear un nuevo usuario
    try {
      const result = await fetch("http://localhost:4000/user", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: identificationCard,
          password: password,
        }),
      });
      const resp = await result.json();
      if (result.status === 400 || result.status === 500) {
        alert.error(resp.message);
        return;
      }
      setIdentificationCard("");
      setPassword("");
      setPasswordConfirm("");
      alert.info(resp.message);
      history.push("/");
    } catch (error) {
      alert.error("Hubo un error en el registro");
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between">
      <Logo />
      <div className=" flex-1 mt-6 rounded-b-[65px] rounded-t-[65px] rounded-tl-none rounded-br-none bg-[#FAFAFA]">
        <Banner
          title="Crear Cuenta Gratis"
        />
        <form onSubmit={handleSubmit} className="mt-4 px-8">
          <div className="flex flex-col gap-4">
            <Input
              id="id-register-identification-card"
              type="number"
              placeholder="Cédula de Identidad"
              className="w-full h-12 pl-4 placeholder-gray-600 bg-[#E0E0E0]"
              value={identificationCard}
              handle={(e) => {
                if (e.target.value.length >= 11) return;
                setIdentificationCard(e.target.value);
              }}
            />
            <Input
              id="id-register-password"
              type="password"
              placeholder="Contraseña"
              className="w-full h-12 pl-4 placeholder-gray-600 bg-[#E0E0E0]"
              value={password}
              handle={(e) => {
                if (e.target.value.length >= 16) return;
                setPassword(e.target.value);
              }}
            />
            <Input
              id="id-register-confirm-password"
              type="password"
              placeholder="Confirmar Contraseña"
              className="w-full h-12 pl-4 placeholder-gray-600 bg-[#E0E0E0]"
              value={passwordConfirm}
              handle={(e) => {
                if (e.target.value.length >= 16) return;
                setPasswordConfirm(e.target.value);
              }}
            />
          </div>
          <div
            className={`flex justify-end mt-9 ${
              identificationCard || password
                ? "text-[#0069AA]"
                : "text-gray-300"
            }`}
          >
            <button type="submit" className="flex flex-row">
              <span className="font-bold text-lg">REGISTRAME</span>
              <svg
                className="w-8 h-8 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
