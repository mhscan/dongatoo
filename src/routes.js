import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";
import Home from "./pages/Home/Home";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export default routes;
