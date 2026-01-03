
import style from '../Input/Input.module.css'
import React from 'react'

const Input = ({placeholder,type}) => {
  return (
    <div>
        <input className={style.inputComponet} type={type} placeholder={placeholder}   />
    </div>
  )
}

export default Input