import React from 'react'
import style from './Button.module.css'

const Button = ({switchForm,text}) => {
  return (
    <>
        <button onClick={switchForm} >{text}</button>
    </>
  );
}

export default Button