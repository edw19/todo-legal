import { useState } from "react";
import Logo from "../componets/Logo";
import Footer from "../componets/Footer";
import { withRouter } from "react-router";
import { useAuth } from "../componets/context/auth";

function Profile({ location, history }) {
  const { setIsAuth } = useAuth();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("todo-legal-user")) || location.state.user
  );

  return (
    <div className="flex flex-col h-screen justify-between">
      <Logo />
      <div className="flex-1 mt-6 bg-[#FAFAFA] rounded-b-[65px] rounded-t-[65px] rounded-tl-none rounded-br-none">
        <div className="flex justify-center">
          <svg
            className="w-32 h-20 text-[#71C87C]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className=" text-[#2C4477] font-bold text-xl mt-3 mb-10 text-center">
          ¡Validación Exitosa!
        </h2>
        <div className="mx-8 p-8 rounded-b-[65px] rounded-t-[65px] rounded-tl-none rounded-br-none text-left text-[#2C4477] bg-white">
          <h3 className="font-bold">Datos verificados:</h3>
          <p className="text-left font-extrabold -mt-2">_____________</p>
          <div className="my-4">
            <p className="text-lg">Nombres y Apellidos</p>
            <p className="text-[#464646]">{user.name + " " + user.last_name}</p>
            <p className="text-lg">Cédula de Identidad</p>
            <p className="text-[#464646]">{user.username}</p>
          </div>
        </div>
        <div className="flex justify-end mx-8 mt-8 text-[#0069AA]">
          <button
            className="flex flex-row font-bold text-lg"
            onClick={() => {
              window.localStorage.removeItem("todo-legal-auth");
              history.push("/");
              setUser(null);
              setIsAuth(false);
            }}
          >
            FINALIZAR{" "}
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
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Profile);
