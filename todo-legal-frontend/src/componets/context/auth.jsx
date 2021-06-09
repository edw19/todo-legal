import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// cree un contexto global para manejar el estado de inicio de sesión con react context

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(
    window.localStorage.getItem("todo-legal-auth") ? true : false
  );
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
// hook personalizado para acceder directamente al valor de isAuth
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
