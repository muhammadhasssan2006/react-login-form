import React from "react";
import Input from "./Components/Input";
import "./App.css";
let App = () => {
  return (
    <div className='container'>
      <div>
        <h1>Login Page</h1>

        <Input label='Enter Name: ' placeholder='Enter your name' type='text' />
        <br />
        <br />
        <Input
          label='Enter email: '
          placeholder='Enter your email'
          type='text'
        />
        <br />
        <br />
        <Input
          label='Enter password: '
          placeholder='Enter your password'
          type='text'
        />
      </div>

      <div>
        <h1>Sign up Page</h1>

        <Input
          label='Enter  FullName: '
          placeholder='Enter your name'
          type='text'
        />
        <br />
        <br />
        <Input
          label='Enter email: '
          placeholder='Enter your email'
          type='text'
        />
        <br />
        <br />
        <Input
          label='Enter password: '
          placeholder='Enter your password'
          type='text'
        />
      </div>
    </div>
  );
};

export default App;
