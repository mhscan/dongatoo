import { createContext } from "react";

const Athcontext = createContext({
    isLogin: false,
    token: null,
    userinfo: null,
    groupinfo:null,
    groupinfofunc:()=>{},
    login: ()=>{},
    logout: ()=>{},
});

export default Athcontext;