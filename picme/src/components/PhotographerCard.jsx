import React from 'react'
import avatar from '../assets/images/avatar.png'
import { useNavigate } from 'react-router-dom'
import RatingsIcon from '../assets/icons/RatingsIcon'

const PhotographerCard = ({id,isAvailable,name,rating,reviewsNo,profileImg}) => {

  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/photographer/portfolio/${id}`)
  }

  const profileImageURL = profileImg ? profileImg : avatar

  return (
    <div className={`photographer-card ${isAvailable !== false ? 'available' : 'not-available'}`}  
         onClick={handleCardClick}>
      <div className='avatar-container'>
        <img src={profileImageURL} alt='profile-pic' />
      </div>
      <p className='name'>{name}</p>
      <p className='title'>Photographer</p>
      <div className='ratings-container'>
        <RatingsIcon />
        <span className='ratings'>{rating}</span>
        <span className='reviews'>{`(${reviewsNo}) reviews`}</span>
      </div>
    </div>
  )
}

export default PhotographerCard
