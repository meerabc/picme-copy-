import React from 'react'

const Button = ({variant,onClick,children,type='button'}) => {
  return (
    <button 
      type={type}
      className={variant==='filled' ? 'filled' : 'outline'} 
      onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button
