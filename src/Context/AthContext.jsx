import { createContext } from "react";

const Athcontext = createContext({
    isLogin: false,
    token: null,
    userinfo: null,
    login: ()=>{},
    logout: ()=>{},
});

export default Athcontext;