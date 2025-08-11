import React from 'react'
import RatingsIcon from '../assets/icons/RatingsIcon'
import avatar from '../assets/images/avatar.png'

const ReviewCard = ({review}) => {

  const profileImg = review.reviewer.profile_image_url
  const profileImageURL = profileImg ? profileImg : avatar
  const dateString = review.updated_at || review.created_at

  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short"
  });
    
  return (
    <div className='review-card'>
      <div className='profile-pic'>
        <img 
          src={profileImageURL} 
          alt='profile-pic'
          onError={(e) => {
            e.target.src = avatar
          }}
        />
      </div>
      <div className='review-container'>
        <div className='name-div'>
            <span className='reviewer-name'>{review.reviewer.name}</span>
            <span className='review-date'>{formattedDate}</span>
        </div>
        <div className='ratings'>
              {Array.from({ length: review?.rating || 0 }, (_, i) => (
                <RatingsIcon key={i} />
              ))}
        </div>
        <div className='comment'>
            {review.comment}
        </div>
      </div>
    </div>
  )
}

export default ReviewCard