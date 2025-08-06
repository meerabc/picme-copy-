import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div className='img-card'>
      <img src={image} alt='image' />
    </div>
  )
}

export default ImageCard
