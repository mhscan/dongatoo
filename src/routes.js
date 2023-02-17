import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";
import Home from "./pages/Home/Home";
import Forgetpassword from "./pages/LoginRegister/Forgetpassword";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgetpassword", element: <Forgetpassword /> },
];

export default routes;
