import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";
import Home from "./pages/Home/Home";
import Forgetpassword from "./pages/LoginRegister/Forgetpassword";

import App from "./pages/App/App";
import Group from "./pages/Group/Group"

let routes = [
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgetpassword", element: <Forgetpassword /> },
  { path: "/app", element: <App /> },
  { path: "/app/group/:groupID", element: <Group /> },
  
];

export default routes;
