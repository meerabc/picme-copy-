import React from 'react'

const LoginWithButton = ({icon,children}) => {
  return (
    <button className='login-with-button'>
       {icon}
       {children}
    </button>
  )
}

export default LoginWithButton
