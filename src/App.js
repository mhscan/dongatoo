import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import Athcontext from "./Context/AthContext";


export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(false);
  const [userinfo, setuserinfo] = useState(false);

  const router = useRoutes(routes);

  const login = useCallback((token, userdata) => {
    setToken(token);
    setIsLogin(true);
    setuserinfo(userdata);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setuserinfo({});
    localStorage.removeItem("user");
  }, []);
  useEffect(() => {
    
    const localStoragedata = JSON.parse(localStorage.getItem("user"));
    if (localStoragedata) {
      fetch(`https://dongato-server.bavand.top/api/user/me`, {
        method: "GET",
        headers: {
          Authorization: localStoragedata.token,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setIsLogin(true);
          setuserinfo(result);
          
        });
    }
    
  }, [login]);
  return (
    <Athcontext.Provider
      value={{
        isLogin,
        token,
        userinfo,
        login,
        logout,
      }}>
      <div className="content">
        {router}
        
      </div>
    </Athcontext.Provider>
  );
}
