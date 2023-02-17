import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";
import Home from "./pages/Home/Home";
import Forgetpassword from "./pages/LoginRegister/Forgetpassword";
import Group from "./pages/Group/Group"
import App from "./pages/App/App";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgetpassword", element: <Forgetpassword /> },
  { path: "/App", element: <App /> },
  { path: "/App/:groupID", element: <Group /> },
];

export default routes;
