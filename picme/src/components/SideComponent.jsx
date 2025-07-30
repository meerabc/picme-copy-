import React from 'react'
import sideImage from "../assets/images/side_img.png" 

const SideComponent = () => {
  return (
    <div className='side-component'>
          <img className='side-image' src={sideImage} alt='side-image' />
    </div>
  )
}

export default SideComponent
