import { useState } from "react";
import Banner from "../componets/Banner";
import Footer from "../componets/Footer";
import Input from "../componets/Input";
import Logo from "../componets/Logo";
import InputFields from "../componets/InputFields";
import { Link } from "react-router-dom";
import { useAuth } from "../componets/context/auth";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
function Login() {
  const { setIsAuth } = useAuth();
  const history = useHistory();
  const alert = useAlert();
  const [identificationCard, setIdentificationCard] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    // detener recarga del navegador
    e.preventDefault();
    // verificar que las credenciales no esten vacias
    const isEmpty = !identificationCard || !password;
    // validar que cédula y password no esten vacios
    if (isEmpty) {
      alert.error("Proporciona tus credeciales");
      return;
    }
    // validar logitud de la cédula
    if (identificationCard.length !== 10) {
      alert.error("Cédula de identidad incorrecta");
      return;
    }
    try {
      const result = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: identificationCard, password }),
      });
      const resp = await result.json();
      if (result.status === 400 || result.status === 500) {
        alert.error(resp.message);
        return;
      }

      setPassword("");
      setIdentificationCard("");
      history.push({
        pathname: "/perfil",
        state: { user: resp },
      });
      window.localStorage.setItem("todo-legal-auth", "true");
      window.localStorage.setItem("todo-legal-user", JSON.stringify(resp));
      setIsAuth(true);
    } catch (error) {
      console.log(error);
      alert.error("Error en inicio de sesión");
    }
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Logo />
      <div className="flex-1 mt-6 bg-[#FAFAFA] rounded-b-[65px] rounded-t-[65px] rounded-tl-none rounded-br-none">
        <Banner
          title="Bienvenido Usuario"
          login={true}
        />
        <form onSubmit={handleSubmit} className="mt-4 px-8">
          <div className="flex flex-col gap-4 focus:outline-none">
            <Input
              value={identificationCard}
              handle={(e) => {
                if (e.target.value.length >= 11) return;
                setIdentificationCard(e.target.value);
              }}
            />
            <InputFields
              type="password"
              id="password-login"
              placeholder="Contraseña"
              value={password}
              handle={(e) => setPassword(e.target.value)}
            />
            <Link
              to="/crear-cuenta-gratis"
              className="text-[#384F7F] text-xs text-center"
            >
              No tengo cuenta, crear una GRATIS
            </Link>
          </div>
          <div
            className={`flex justify-end mt-9 ${
              identificationCard || password
                ? "text-[#0069AA]"
                : "text-gray-300"
            }`}
          >
            <button type="submit" className="flex flex-row">
              <span className="font-bold text-lg">CONTINUAR</span>
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

export default Login;
