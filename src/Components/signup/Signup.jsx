import React from 'react'
import Input from '../Input/Input'
// import style from '../login/Login.module.css'
import style from '../signup/Signup.module.css'
import Button from '../button/Button'

const Signup = ({switchForm}) => {
  return (
    <div className={style.signupcontainer}>
        <h1>Register</h1>
        <Input placeholder=' First name' type='text'   />
        <Input placeholder=' Last name' type='text'   />
        <Input placeholder=' Email' type='email'   />
        <Input placeholder=' Birth Date' type='email'   />
        <Input placeholder=' Password' type='password'  />
        <Input placeholder='Comfirm Password' type='password'  />
        <Button switchForm={switchForm} text='Sign up'/>
    </div>
  )
}

export default Signup