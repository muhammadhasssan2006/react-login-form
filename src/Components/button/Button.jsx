import React from 'react'
import style from './Button.module.css'

const Button = ({text}) => {
  return (
    <div>
        <button>{text}</button>
    </div>
  )
}

export default Button