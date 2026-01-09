import React, { useState } from "react";
import "./App.css";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/Signup";
let App = () => {
  let [isLogin, setLogin] = useState(true);
  let switchForm = () => {
    setLogin(!isLogin);
  };
  return <div>{isLogin ? <Login switchForm={switchForm} /> : <Signup switchForm={switchForm}/>}</div>;
};

export default App;
