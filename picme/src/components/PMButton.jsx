import React from 'react'

const Button = ({variant,children}) => {
  return (
    <button className={variant==='filled' ? 'filled' : 'outline'}>
        {children}
    </button>
  )
}

export default Button
