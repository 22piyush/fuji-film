import React from 'react'
import "./Button.css"

function Button({title,onClick,variant}) {
  return (
   <button onClick={onClick} className={`buton-form ${variant}`}>{title}</button>
  )
}

export default Button