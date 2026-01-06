import React, { useState } from "react";
import "./App.css";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/Signup";
let App = () => {
  const [isLogin, setLogin] = useState(true);
  const switchForm = () => {
    setLogin(!isLogin);
  };
  return <div>{isLogin ? <Login switchForm={switchForm} /> : <Signup switchForm={switchForm}/>}</div>;
};

export default App;
