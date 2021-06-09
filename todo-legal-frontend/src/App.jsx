import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useAuth } from "./componets/context/auth";

function App() {
  // function creada en el contexto global
  const { isAuth } = useAuth();
  return (
    <>
      {/* isAuth es negada en esta condición para que al momento de iniciar la app ingrese a login */}
      {!isAuth ? (
        <Router>
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-start-4 md:col-span-6">
              <Switch>
                <Route path="/crear-cuenta-gratis">
                  <Register />
                </Route>
                <Route path="/" exact>
                  <Login />
                </Route>
                <Route path="*">
                  <div className="flex h-screen">
                    <div className="m-auto flex flex-col text-center">
                      404 Páguina no encontrada
                      <Link to="/" className="underline text-blue-800">
                        iniciar sesión
                      </Link>
                    </div>
                  </div>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-start-4 md:col-span-6">
            <Router>
              <Switch>
                <Route path="/perfil" exact>
                  <Profile />
                </Route>
                <Route path="*" exact>
                  <NoMatch />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      )}
    </>
  );
}

function NoMatch() {
  return <Redirect to="/perfil" />
}

export default App;
