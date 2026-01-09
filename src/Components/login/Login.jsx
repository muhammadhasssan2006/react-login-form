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
        <p style={{textAlign:'center',borderBottom:' solid white',paddingBottom:'3%'}}>Forgot pasword?</p>
        <Button switchForm={switchForm} text='Create new account'/>
    </div>
  )
}

export default Login