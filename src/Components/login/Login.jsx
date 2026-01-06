import React from 'react'
import Input from '../Input/Input'
import style from '../login/Login.module.css'
import Button from '../button/Button'

const Login = ({switchForm}) => {
  return (
    <div className={style.logincontainer}>
        <h1>Login</h1>
        <Input placeholder=' Username' type='text'   />
        <Input placeholder=' Password' type='password'  />
        <Button switchForm={switchForm} text='Login'/>
    </div>
  )
}

export default Login