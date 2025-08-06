import React from 'react'

const ImageCard = ({imageURL}) => {
  return (
    <div className='img-card'>
      <img src={imageURL} alt='image' />
    </div>
  )
}

export default ImageCard
