import React from 'react'
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";


const Input = ({icon,type,placeholder}) => {

  const [isHidden,setIsHidden] = React.useState(true)

  const InputType = type === 'password' ? (isHidden ? 'password' : 'text') : type 

  const eyeIcon = isHidden ? <IoMdEyeOff /> : <IoEye />

  function toggleVisibility(){
    setIsHidden(prev=>!prev)
  }

  return (
    <div className="input-div">

       <span className='left-icon' width='22'>{icon}</span>   
       <input icon={icon} type={InputType} placeholder={placeholder}/>
       {type==='password' ? 
          <span className="eye-icon-container" onClick={toggleVisibility}>{eyeIcon}</span> : 
          null }
    </div>
  )
}

export default Input
