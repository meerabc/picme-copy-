import React from 'react'
import avatar from '../assets/images/avatar.png'
import RatingsIcon from '../assets/icons/RatingsIcon'

const PhotographerCard = ({item}) => {
  return (
    <div className='photographer-card'>
      <div className='avatar-container'>
        <img src={avatar} alt='profile-pic' />
      </div>
      <p className='name'>{item.photographer.name}</p>
      <div className='ratings-container'>
        <RatingsIcon />
        <span className='ratings'>{item.photographer.average_rating}</span>
        <span className='reviews'>{`(${item.photographer.total_reviews}) reviews`}</span>
      </div>
    </div>
  )
}

export default PhotographerCard
