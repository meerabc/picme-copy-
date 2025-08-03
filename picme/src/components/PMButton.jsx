import React from 'react'

const Button = ({variant='filled',onClick,children,type='button'}) => {
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
